"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { addProduct, updateProduct, getProductImagePath } from "@/services/products"
import type { Product } from "@/services/products"
import { useRouter } from "next/navigation"
import Image from "next/image"

const productSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.string().refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
    message: "Price must be a positive number",
  }),
  category: z.string().min(1, "Please select a category"),
  image: z.string().min(1, "Please select a main image"),
  images: z.array(z.string()).optional(),
  stock: z.string().refine((val) => !isNaN(parseInt(val)) && parseInt(val) >= 0, {
    message: "Stock must be a non-negative number",
  }),
})

type ProductFormValues = z.infer<typeof productSchema>

const categories = [
  "Electronics",
  "Clothing",
  "Books",
  "Home & Garden",
  "Sports",
  "Beauty",
  "Toys",
  "Other",
]

// List of available images in /public/images/
const availableImages = [
  "ii.png",
  "smart watch.jpg",
  "smart watch1.jpg",
  "smartwatch3.jpg",
  "headphone.jpg",
  "headphones.jpg",
  "runnigShoes.jpg",
  "runningShoes2.jpg",
  "runningShoes.jpg",
  // Add more image filenames as needed
]

interface AddProductFormProps {
  initialData?: Product
}

export function AddProductForm({ initialData }: AddProductFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedImages, setSelectedImages] = useState<string[]>(initialData?.images || [])
  const { toast } = useToast()
  const router = useRouter()

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: initialData?.name || "",
      description: initialData?.description || "",
      price: initialData?.price?.toString() || "",
      category: initialData?.category || "",
      image: initialData?.image || "",
      images: initialData?.images || [],
      stock: initialData?.stock?.toString() || "",
    },
  })

  const handleImageToggle = (imageName: string) => {
    setSelectedImages(prev => {
      if (prev.includes(imageName)) {
        return prev.filter(img => img !== imageName)
      } else {
        return [...prev, imageName]
      }
    })
  }

  const onSubmit = async (data: ProductFormValues) => {
    setIsLoading(true)
    try {
      const productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'> = {
        name: data.name,
        description: data.description,
        price: parseFloat(data.price),
        category: data.category,
        image: data.image,
        images: selectedImages,
        stock: parseInt(data.stock),
      }

      if (initialData?.id) {
        await updateProduct(initialData.id, productData)
        toast({
          title: "Success",
          description: "Product updated successfully",
        })
      } else {
        await addProduct(productData)
        toast({
          title: "Success",
          description: "Product added successfully",
        })
      }
      
      router.push("/admin/products")
    } catch (error) {
      console.error("Error in onSubmit:", error)
      toast({
        title: "Error",
        description: "There was a problem saving your product. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter product name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter product description"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" step="0.01" placeholder="0.00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stock</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Main Product Image</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select main image" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {availableImages.map((image) => (
                    <SelectItem key={image} value={image}>
                      {image}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Images</FormLabel>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {availableImages.map((image) => (
                  <div
                    key={image}
                    className={`relative cursor-pointer rounded-lg border-2 p-2 transition-all ${
                      selectedImages.includes(image)
                        ? "border-primary bg-primary/10"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleImageToggle(image)}
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={getProductImagePath(image)}
                        alt={image}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="mt-2 text-center">
                      <input
                        type="checkbox"
                        checked={selectedImages.includes(image)}
                        onChange={() => handleImageToggle(image)}
                        className="mr-2"
                      />
                      <span className="text-sm">{image}</span>
                    </div>
                  </div>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading 
            ? (initialData ? "Updating Product..." : "Adding Product...") 
            : (initialData ? "Update Product" : "Add Product")}
        </Button>
      </form>
    </Form>
  )
} 
export interface Product {
  id: string
  name: string
  price: number
  seller: string
  category: string
  rating: number
  stock: number
  images: string[]
  videoUrl?: string
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    seller: "AudioTech",
    category: "Electronics",
    rating: 4.5,
    stock: 10,
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
  },
  {
    id: "2",
    name: "Gaming Mouse",
    price: 79.99,
    seller: "GameGear",
    category: "Electronics",
    rating: 4.8,
    stock: 15,
    images: ["https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  },
  {
    id: "3",
    name: "Mechanical Keyboard",
    price: 159.99,
    seller: "GameGear",
    category: "Electronics",
    rating: 4.7,
    stock: 0,
    images: ["https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  },
  {
    id: "4",
    name: "4K Monitor",
    price: 399.99,
    seller: "TechPro",
    category: "Electronics",
    rating: 4.6,
    stock: 5,
    images: ["https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  },
  {
    id: "5",
    name: "Ergonomic Chair",
    price: 299.99,
    seller: "ComfortZone",
    category: "Furniture",
    rating: 4.3,
    stock: 8,
    images: ["https://images.unsplash.com/photo-1688578735427-994ecdea3ea4?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  },
  {
    id: "6",
    name: "Professional Camera",
    price: 899.99,
    seller: "TechPro",
    category: "Electronics",
    rating: 4.9,
    stock: 3,
    images: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    id: "7",
    name: "Smart Watch",
    price: 299.99,
    seller: "TechPro",
    category: "Electronics",
    rating: 4.4,
    stock: 20,
    images: ["https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    id: "8",
    name: "Ultra HD Webcam",
    price: 129.99,
    seller: "TechPro",
    category: "Electronics",
    rating: 4.6,
    stock: 12,
    images: ["https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
  },
  {
    id: "9",
    name: "Wireless Keyboard",
    price: 89.99,
    seller: "GameGear",
    category: "Electronics",
    rating: 4.4,
    stock: 25,
    images: ["https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
  },
  {
    id: "10",
    name: "Gaming Chair",
    price: 249.99,
    seller: "GameGear",
    category: "Furniture",
    rating: 4.7,
    stock: 8,
    images: ["https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
  },
  {
    id: "11",
    name: "Bluetooth Speaker",
    price: 79.99,
    seller: "AudioTech",
    category: "Electronics",
    rating: 4.3,
    stock: 30,
    images: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
  },
  {
    id: "12",
    name: "Standing Desk",
    price: 399.99,
    seller: "ComfortZone",
    category: "Furniture",
    rating: 4.8,
    stock: 5,
    images: ["https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
  },
  {
    id: "13",
    name: "Curved Monitor",
    price: 449.99,
    seller: "TechPro",
    category: "Electronics",
    rating: 4.9,
    stock: 7,
    images: ["https://images.unsplash.com/photo-1585362028211-dee1aba5fdd3?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
  },
  {
    id: "14",
    name: "Desk Lamp",
    price: 49.99,
    seller: "ComfortZone",
    category: "Furniture",
    rating: 4.2,
    stock: 40,
    images: ["https://images.unsplash.com/photo-1510074468346-504b4d8a8630?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
  },
  {
    id: "15",
    name: "Noise-Canceling Headphones",
    price: 299.99,
    seller: "AudioTech",
    category: "Electronics",
    rating: 4.8,
    stock: 15,
    images: ["https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    id: "16",
    name: "Gaming Console",
    price: 499.99,
    seller: "GameGear",
    category: "Electronics",
    rating: 4.9,
    stock: 5,
    images: ["https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    id: "17",
    name: "Bookshelf",
    price: 159.99,
    seller: "ComfortZone",
    category: "Furniture",
    rating: 4.3,
    stock: 12,
    images: ["https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    id: "18",
    name: "Coffee Maker",
    price: 89.99,
    seller: "TechPro",
    category: "Electronics",
    rating: 4.6,
    stock: 25,
    images: ["https://images.unsplash.com/photo-1520970014086-2208d157c9e2?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    id: "19",
    name: "Study Table",
    price: 199.99,
    seller: "ComfortZone",
    category: "Furniture",
    rating: 4.4,
    stock: 8,
    images: ["https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    id: "20",
    name: "Wireless Earbuds",
    price: 129.99,
    seller: "AudioTech",
    category: "Electronics",
    rating: 4.7,
    stock: 30,
    images: ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
  },
  {
    id: "21",
    name: "Office Chair",
    price: 189.99,
    seller: "ComfortZone",
    category: "Furniture",
    rating: 4.5,
    stock: 15,
    images: ["https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    id: "22",
    name: "Smart Speaker",
    price: 149.99,
    seller: "AudioTech",
    category: "Electronics",
    rating: 4.4,
    stock: 20,
    images: ["https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  },
  {
    id: "23",
    name: "File Cabinet",
    price: 129.99,
    seller: "ComfortZone",
    category: "Furniture",
    rating: 4.2,
    stock: 10,
    images: ["https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    id: "24",
    name: "Tablet",
    price: 349.99,
    seller: "TechPro",
    category: "Electronics",
    rating: 4.8,
    stock: 7,
    images: ["https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    id: "25",
    name: "Desk Organizer",
    price: 29.99,
    seller: "ComfortZone",
    category: "Furniture",
    rating: 4.1,
    stock: 40,
    images: ["https://images.unsplash.com/photo-1644553691648-94d79be52958?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    id: "26",
    name: "Portable Charger",
    price: 49.99,
    seller: "TechPro",
    category: "Electronics",
    rating: 4.5,
    stock: 50,
    images: ["https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
  },
  {
    id: "27",
    name: "Bean Bag",
    price: 79.99,
    seller: "ComfortZone",
    category: "Furniture",
    rating: 4.3,
    stock: 18,
    images: ["https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
  },
  {
    id: "28",
    name: "Security Camera",
    price: 199.99,
    seller: "TechPro",
    category: "Electronics",
    rating: 4.7,
    stock: 15,
    images: ["https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
  },
  {
    id: "29",
    name: "Wall Shelf",
    price: 69.99,
    seller: "ComfortZone",
    category: "Furniture",
    rating: 4.4,
    stock: 22,
    images: ["https://images.unsplash.com/photo-1597072689227-8882273e8f6a?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    id: "30",
    name: "Wireless Router",
    price: 129.99,
    seller: "TechPro",
    category: "Electronics",
    rating: 4.6,
    stock: 9,
    images: ["https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=500&auto=format"],
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  }
] 
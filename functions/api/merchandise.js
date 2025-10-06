export async function onRequest(context) {
  const db = context.env.gallery_db;
  
  console.log("🔍 D1 query triggered from /merchandise");
  
  const { results } = await db.prepare("SELECT * FROM bens_bikes_merchandise").all();
    
  const products = results.map(p => ({
    id: p.id,
    title: p.title,
    description: p.description,
    price: p.price,
    category: p.category,
    image: p.image
    //images: p.images ? JSON.parse(p.images) : [],
    //longDescription: p.longDescription
  }));

  
  console.log("📦 D1 returned merchandise:");
  products.forEach((product, i) => {
    console.log(`🔹 Product ${i + 1}: ${product.title} $${product.image}`);
  });

  return Response.json(products);
}

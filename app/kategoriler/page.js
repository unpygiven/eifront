import Categories from "@/components/categorycomponents/categories";
import { getCategories } from "@/service/fetchdata";
import Header from "@/components/layoutcomponents/Header";

export default async function Home()
{
    const cats = await getCategories();
    await new Promise(resolve => setTimeout(resolve, 3000))
    return (
        <div style={{background: 'black'}}>
          <title>{"kategoriler"}</title>
          <Header/>
          <Categories categories={cats}/>
        </div>
      )

}
import Categories from "@/components/categorycomponents/categories";
import { getCategories } from "@/service/fetchdata";
import Header from "@/components/layoutcomponents/Header";

export default async function Home()
{
    const cats = await getCategories();
    return (
        <div style={{background: '#4A4A4A'}}>
          <title>{"kategoriler"}</title>
          <Header/>
          <Categories categories={cats}/>
        </div>
      )

}
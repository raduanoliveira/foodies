import Link from "next/link";

export default async function MealsSlugPage({ params }) {
    const {slug} = await params
    return (
        <main>
            <h1>Meals Slug Page</h1>
            <h5>{slug}</h5>
            {slug == 'rice' &&
                <>
                    <p>
                        Rice is a cereal grain and in its domesticated form is the staple food of over half of the world's population, particularly in Asia and Africa.
                    </p>
                </>}
            {slug == 'beans' &&
                <>
                    <p>
                    A bean is the seed of any plant in the legume family (Fabaceae) used as a vegetable for human consumption or animal feed. 
                    </p>
                </>}
            <Link href='/meals'>Return to Meals</Link>
        </main>
    )
}
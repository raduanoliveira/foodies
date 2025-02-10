import Link from "next/link";

export default function MealsPage() {
    return (
        <main>
            <h1>Meals Page</h1>
            <p><Link href='/meals/share'>Meals Share</Link></p>
            <p><Link href='/meals/rice'>Rice</Link></p>
            <p><Link href='/meals/beans'>Beans</Link></p>
            <p><Link href='/'>Return to Home</Link></p>
        </main>
    )
} 
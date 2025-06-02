'use client';
import Blog1 from "@/components/blog1";
import Blog2 from "@/components/blog2";
import Blog3 from "@/components/blog3";
import Blog4 from "@/components/blog4";
import Footer from "@/components/footer";
import NavbarK from "@/components/navabar";

export default function AboutUs() {
    return (
        <section>
            <NavbarK/>
            <Blog1/>
            <Blog2/>
            <Blog4/>
            <Blog3/>
            <Footer/>
        </section>
    )
}
import { HeroSection } from "@/components/hero-section";
import { MenuGallery } from "@/components/menu-gallery";
import { StorySection } from "@/components/story-section";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f0f0f0] overflow-x-hidden selection:bg-primary selection:text-black">
      <SiteHeader />
      
      <HeroSection />
      
      {/* Decorative Separator */}
      <div className="h-32 w-full bg-gradient-to-b from-transparent to-[#050505] relative -mt-32 z-20 pointer-events-none" />

      <StorySection />
      
      <MenuGallery />

      {/* Footer / Contact Preview */}
      <section className="py-24 border-t border-zinc-900 bg-black">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-kanit mb-8 text-white">Join the Vibe.</h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
                <div className="text-right border-r border-zinc-800 pr-8 hidden md:block">
                    <p className="font-kanit text-xl">HOURS</p>
                    <p className="text-muted-foreground">Mon-Thu: 11am - 9:30pm</p>
                    <p className="text-muted-foreground">Fri-Sat: 11am - 10:30pm</p>
                </div>
                <div>
                     <Button className="text-xl px-10 py-8 bg-accent hover:bg-accent/80 text-white rounded-none">
                        BOOK YOUR TABLE
                     </Button>
                </div>
                <div className="text-left border-l border-zinc-800 pl-8 hidden md:block">
                    <p className="font-kanit text-xl">LOCATION</p>
                    <p className="text-muted-foreground">497 E Alessandro Blvd # D</p>
                    <p className="text-muted-foreground">Riverside, CA 92508</p>
                </div>
            </div>
            <p className="text-zinc-600 text-sm font-outfit uppercase tracking-widest">© 2025 GraPow Riverside. All Rights Reserved.</p>
        </div>
      </section>
    </main>
  );
}

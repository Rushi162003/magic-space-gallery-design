
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* About Hero */}
      <section className="py-12 md:py-16 bg-accent/20">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">About Magic Space Interior</h1>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We transform ordinary spaces into extraordinary experiences through innovative design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1770&auto=format&fit=crop"
                alt="About Magic Space Interior"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Magic Space Interior was founded with a vision to redefine interior spaces through innovative design approaches. What began as a small studio has now evolved into a full-service interior design firm serving clients across residential and commercial sectors.
              </p>
              <p className="text-muted-foreground">
                We believe that every space has potential, and our mission is to unlock that potential through thoughtful design that balances aesthetics, functionality, and sustainability. Our team of experienced designers works closely with clients to bring their vision to life while adding our unique touch of magic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Founders */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Founders</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Meet the visionaries behind Magic Space Interior
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
                <img
                  src="rakesh.jpg"
                  alt="Rakesh Jagdale"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-2">Rakesh Jagdale</h3>
              <p className="text-primary mb-4">Founder & Creative Director</p>
              <p className="text-muted-foreground max-w-md">
                With over 15 years of experience in interior design, Rakesh brings a wealth of knowledge and creative vision to every project. His passion for innovative design solutions and attention to detail has established Magic Space Interior as a leader in the industry.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
                <img
                  src="gajanan.jpg"
                  alt="Gajanan Wadgaonkar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-2">Gajanan Wadgaonkar</h3>
              <p className="text-primary mb-4">Co-Founder & Technical Director</p>
              <p className="text-muted-foreground max-w-md">
                Gajanan's expertise in project management and technical aspects of interior design ensures that every project is executed flawlessly. His methodical approach and problem-solving skills complement the creative vision of the team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16 bg-accent/30">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              The principles that guide our work and relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push boundaries and explore new design possibilities to create unique spaces."
              },
              {
                title: "Quality",
                description: "We are committed to excellence in every detail, from concept development to final execution."
              },
              {
                title: "Collaboration",
                description: "We work closely with our clients to ensure their vision and needs are reflected in our designs."
              },
              {
                title: "Sustainability",
                description: "We integrate eco-friendly materials and practices whenever possible to create responsible designs."
              },
              {
                title: "Integrity",
                description: "We maintain transparency and honesty in all our client relationships and business practices."
              },
              {
                title: "Adaptability",
                description: "We embrace challenges and find creative solutions to meet the unique needs of each project."
              }
            ].map((value, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="font-serif text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default About;

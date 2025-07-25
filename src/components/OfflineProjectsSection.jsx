
const featuredProjects = [
    //lemon meringue tart 
    {
        id: 1,
        title: "lemon meringue tart",
        image: "/food/lemonTart.jpeg",
        desc: "6/12/25: this was the first tart i ever made + my first time making meringue so i wasn't expecting much but i'm super happy with how it turned out"
    },

    //tier display
    {
        id: 2,
        title: "snack tier + scones",
        image: "/food/xmasTier.jpg",
        desc: "12/25/24: fun little breakfast tier display with matcha checkerboard cookies, avocado toast with goat cheese and pomegranate, and deviled eggs (and scones on the side)"
    },

    //chocolate orange cake
    {
        id: 3,
        title: "chocolate orange cake",
        image: "/food/chocOrangeCake.jpg",
        desc: "5/5/25: i always love making my own birthday cakes + this time i tried using the entire orange (peels for marmalade, juice + flesh for cake batter, leftover scraps were dehydrated for decoration)"

    }
]
export const OfflineProjectsSection = () => {
    return (
        <section id="offlineProjects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                {/*header + desc*/}
                <h2 className="text-3xl md:text-4xl font-bold text-center"> (offline) projects </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto pt-2">
                    when i'm not cooking in the classroom, i'm cooking in the kitchen :))
                    below, you can find my featured works, progress photos, and handwritten recipes!
                </p>

                {/* featured projects */}
                <h2 className="text-xl md:text-2xl font-semibold text-center pb-3"> featured works </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center pb-8 pl-16 pr-16">
                    {featuredProjects.map(project =>
                        <div key={project.id} className="text-left max-w-xs space-y-2 bg-white/80 border border-gray-200 p-2 rounded-md hover:shadow-lg">
                            <p className="font-semibold text-sm">{project.title}</p>
                            <div className="aspect-square w-full max-w-250 mx-auto  overflow-hidden rounded-md shadow-2xs">
                                <img
                                    src={project.image}s
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <p className="font-thin text-sm">{project.desc}</p>

                        </div>
                    )}
                </div>

                {/* other */}
                <h2 className="text-xl text-gray-400 md:text-2xl font-semibold text-center pb-3"> ( more coming soon :O )  </h2>
            </div>

        </section>
    );
}       
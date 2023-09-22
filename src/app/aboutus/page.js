import Profile from "../../components/Profile"
import senseiData, {officerData, teachingTeamData} from "../profiles"

export default function AboutUs() {
    const senseiComponents = senseiData.map(sensei =>
            <Profile
                key={sensei.id}
                name={sensei.name}
                rank={sensei.rank}
                desc={sensei.desc}
                img={sensei.image}
            />)
    
    const officerComponents = officerData.map(sensei =>
        <Profile
            key={sensei.id}
            name={sensei.name}
            rank={sensei.rank}
            desc={sensei.desc}
            img={sensei.image}
        />)

    const teachteamComponents = teachingTeamData.map(sensei =>
        <Profile
            key={sensei.id}
            name={sensei.name}
            rank={sensei.rank}
            desc={sensei.desc}
            img={sensei.image}
        />)

    return (
        <>
            <section>
                <div className="container px-5 mx-auto">
                    <div className="text-center mb-20">
                        <h2 class="sm:text-5xl font-medium title-font text-white mb-4">Our Sensei</h2>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                            Yeah they lit
                        </p>
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-white inline-flex"></div>
                        </div>
                        <div class="container px-5 py-16 mx-auto flex flex-wrap justify-center">
                            {senseiComponents}
                        </div>
                    </div>
                </div>    
            </section>
            <section>
                <div className="container px-5 mx-auto">
                    <div className="text-center mb-20">
                        <h2 class="sm:text-5xl font-medium title-font text-white mb-4">Our Officers</h2>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                            Yeah they lit
                        </p>
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-white inline-flex"></div>
                        </div>
                        <div class="container px-5 py-16 mx-auto flex flex-wrap justify-center">
                            {officerComponents}
                        </div>
                    </div>
                </div>    
            </section>
            <section>
                <div className="container px-5 mx-auto">
                    <div className="text-center mb-20">
                        <h2 class="sm:text-5xl font-medium title-font text-white mb-4">Teaching Team</h2>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                            Yeah they lit
                        </p>
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-white inline-flex"></div>
                        </div>
                        <div class="container px-5 py-16 mx-auto flex flex-wrap justify-center">
                            {teachteamComponents}
                        </div>
                    </div>
                </div>    
            </section>
        </>
    )
}
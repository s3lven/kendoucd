import Image from "next/image"

export default function Profile(props) {
    return(
        <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
                <Image 
                    alt={props.name}
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src={props.img}
                    width={324}
                    height={224}
                />
                <div class="w-full">
                <h2 class="title-font font-medium text-lg text-white">
                    {props.name}
                </h2>
                <h3 class="text-gray-500 mb-3">{props.rank}</h3>
                <p class="mb-4">
                    {props.desc}
                </p>
                </div>
            </div>
        </div>
    )
}
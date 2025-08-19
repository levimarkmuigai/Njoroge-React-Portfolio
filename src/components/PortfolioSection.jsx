import React from 'react';

const companies = [
    {
        name: 'NTV',
        contributions: 'Social Media Growth'
    },

    {
        name: 'BBC',
        contributions: 'Social Media Growth'
    },

    {
        name: 'Gates Foundation',
        contributions: 'Strategic Storytelling'
    }
];

const youtubeVideos  = [
    { id: '_HSbGdot1x8', title: 'Shea Butter'},
    { id: 'Q_78NE8_kLA', title: 'Mud Wrestlng'},
    { id: 'FfA3h4-_cMA', title: 'AntiFemicide'},
    { id: 'kRZMwE6fVYk', title: 'Football'},
    { id: 'izBAqXKGTkc', title: 'Flower'},
    { id: 'ugDTiBMRsu0', title: 'Power'}
];

export default function PortfolioSection() {
    return(
            <section className="p-4x py-16 text-center bg-white">
            <h2 className="text-2xl font-bold mb-8 text-gray-900"> My Portfolio </h2>

            <div className="flex flex-wrap justify-center gap-8 max-w-xl mx-auto">
                {companies.map(({ name, contributions}, index) => 
                (
                    <div key={index} className="
                    bg-gray-50 rounded-2xl p-8 w-[250px] 
                    shadow-md transition-transform 
                    duration-200 ease-in-out hover:scale-105
                    ">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
                        <p className="text-sm text-gray-600">{contributions}</p>
                    </div>
                ))}
            </div>
            <div className="max-w-5xl mx-auto mt-8">
                <div className="grid gird-cols-1 md:grid-cols-3 gap-6 justify-center">
                    {youtubeVideos.map((video, index)  => (
                        <iframe
                            key={index}
                            className="w-full aspect-video rounded-2xl border-0 shadow-md"
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    ))}
                </div>
            </div>
        </section>
    )
}

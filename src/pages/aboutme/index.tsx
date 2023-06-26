import SkillsetTable from "../compontents/skillset/skillsettable";

const Aboutme = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className='absolute left-0 top-0 right-0 bottom-0'>
                <div className="flex items-center justify-center flex-col">
                    <div className="mt-10">
                        <br/>
                        <h1 className="text-white text-4xl text-center">Know who <b className="text-blue-600 ">I am</b></h1>
                        <br/>
                        <p className="text-center text-xl text-white ml-10 mr-10 xl:mr-0 xl:ml-0">
                            Hi, I'm <b className="text-blue-600">Patrick Bürdel</b> from <b className="text-blue-600">Bern, Switzerland</b>.
                            <br/>
                            <br/>
                            I'm in the second year of my apprenticeship as an Application developer.
                            <br/>
                            <br/>
                            However, I've already started 4 years ago with programming.
                            <br/>
                        </p>                            
                    </div>
                    <div className="mt-20">
                        <h1 className="text-white text-4xl text-center pb-1">My <b className="text-blue-600">Skillset</b></h1>
                        <SkillsetTable option={"skillset"}/>
                    </div>
                    <div className="mt-20">
                        <h1 className="text-white text-4xl text-center pb-1">Skills I'm <b className="text-blue-600">working on</b></h1>
                        <SkillsetTable option={"learning"}/>
                    </div>
                    <div className="mb-40 mt-20 xl:mb-30">
                        <h1 className="text-white text-4xl text-center pb-1">My personal <b className="text-blue-600">tech stack</b></h1>
                        <SkillsetTable option={"tools"}/>
                    </div>
                </div>
            </div>
        </main>
    )    
}

export default Aboutme;
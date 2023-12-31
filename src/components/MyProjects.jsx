import dragon from '../assets/portfolio/dragon.png';
import aesop from '../assets/portfolio/Aesop.png';
const MyProjects = () => {
    const projects = [
        {
          id: 1,
          src: dragon,
          link: 'https://crypto-info-api.cyclic.app/',
          repo: 'https://github.com/rahulkarda/crypto-info-api'
        },
        {
          id: 2,
          src: aesop,
          link: 'https://64f44aeacba86e79e69dc4ba--gilded-scone-53de0b.netlify.app/',
          repo: 'https://github.com/ipptykhan1/AE-soap-project'
        },
        
      ];
    
    return (
        <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold mb-2 border-b-1 border-gray-500">
            My Projects
          </p>
          <p className="py-6 inline">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default MyProjects;
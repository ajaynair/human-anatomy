
import React, { useState, useMemo } from 'react';
import { BONE_DATA } from './constants';
import { Bone, BoneCategory } from './types';
import BoneCard from './components/BoneCard';
import { GetCategoryIcon, ScienceIcon } from './components/icons';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSkeletonModel, setShowSkeletonModel] = useState(false);

  const filteredBones = useMemo(() => {
    if (!searchTerm) {
      return BONE_DATA;
    }
    return BONE_DATA.filter(bone =>
        bone.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (bone.scientificName && bone.scientificName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        bone.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bone.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const bonesByCategory = useMemo(() => {
    return filteredBones.reduce((acc, bone) => {
      const category = bone.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(bone);
      return acc;
    }, {} as Record<BoneCategory, Bone[]>);
  }, [filteredBones]);

  const sortedCategories = useMemo(() => {
    const categoryOrder = Object.values(BoneCategory);
    return Object.keys(bonesByCategory).sort((a, b) =>
        categoryOrder.indexOf(a as BoneCategory) - categoryOrder.indexOf(b as BoneCategory)
    ) as BoneCategory[];
  }, [bonesByCategory]);


  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-slate-100 p-4 md:p-8 selection:bg-cyan-500 selection:text-white">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <ScienceIcon className="w-16 h-16 text-cyan-400 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-500">
              Human Osteology Explorer
            </h1>
          </div>
          <p className="text-slate-400 text-lg">Explore the fascinating world of human bones.</p>
        </header>

        <div className="mb-6 max-w-2xl mx-auto">
          <input
              type="text"
              placeholder="Search bones (e.g., Femur, Skull, Tibia)..."
              className="w-full p-4 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-300 shadow-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search for bones"
          />
        </div>

        <div className="mb-10 max-w-md mx-auto">
          <button
              onClick={() => setShowSkeletonModel(true)}
              className="w-full flex items-center justify-center py-3 px-6 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75"
              aria-label="View 3D Human Skeleton Model"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v7.5M21 7.5l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v7.5m15-7.5l-6 3.5m0 0l-6-3.5m6 3.5v7.5m0 0l6 3.5m-6-3.5L6 15m1.125-7.5h11.75c.621 0 1.125-.504 1.125-1.125V6.375c0-.621-.504-1.125-1.125-1.125H4.125C3.504 5.25 3 5.754 3 6.375v1.125c0 .621.504 1.125 1.125 1.125z" />
            </svg>
            View 3D Human Skeleton
          </button>
        </div>

        {sortedCategories.length === 0 && searchTerm && (
            <div className="text-center text-slate-400 text-xl">
              <p>No bones found matching "{searchTerm}".</p>
              <p>Try a different search term.</p>
            </div>
        )}

        <div className="space-y-12">
          {sortedCategories.map(category => (
              <section key={category} aria-labelledby={`category-title-${category.replace(/\s+/g, '-')}`}>
                <div className="flex items-center mb-6 pb-2 border-b-2 border-cyan-600/50">
                  {GetCategoryIcon(category)}
                  <h2 id={`category-title-${category.replace(/\s+/g, '-')}`} className="text-3xl font-semibold text-cyan-300 ml-3">
                    {category}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {bonesByCategory[category].map(bone => (
                      <BoneCard key={bone.id} bone={bone} />
                  ))}
                </div>
              </section>
          ))}
        </div>

        {showSkeletonModel && (
            <div
                className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50"
                onClick={() => setShowSkeletonModel(false)}
                role="dialog"
                aria-modal="true"
                aria-labelledby="skeleton-modal-title"
            >
              <div
                  className="bg-slate-800 w-screen h-screen flex flex-col"
                  onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center p-4 border-b border-slate-700">
                  <h3 id="skeleton-modal-title" className="text-2xl font-semibold text-cyan-400">Interactive 3D Human Model</h3>
                  <button
                      onClick={() => setShowSkeletonModel(false)}
                      className="p-2 rounded-md hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors"
                      aria-label="Close 3D model viewer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex-grow relative overflow-hidden">
                  <div style={{ width: '100%', height: '100%' }}>
                    <iframe
                        title="BioDigital Human Model"
                        frameBorder="0"
                        allowFullScreen
                        allow="fullscreen"
                        src="https://human.biodigital.com/widget/?be=2Scq&s=female&background.colors=0,0,0,1,0,0,0,1&initial.hand-hint=true&ui-fullscreen=true&ui-center=false&ui-object-tree=false&ui-dissect=true&ui-zoom=true&ui-help=true&ui-tools-display=primary&ui-info=true&uaid=3M4a0"
                        style={{ width: '100%', height: '100%' }}
                    ></iframe>
                  </div>
                </div>
                {/* The BioDigital widget should handle its own attribution/branding.
                If specific attribution is required by their terms outside of the widget itself,
                it would need to be added here. For now, removing the previous Sketchfab attribution.
            */}
              </div>
            </div>
        )}

        <footer className="text-center mt-16 pt-8 border-t border-slate-700">
          <p className="text-slate-500 text-sm">
            Osteology Explorer &copy; {new Date().getFullYear()}. All data for educational purposes.
          </p>
        </footer>
      </div>
  );
};

export default App;


import React, { useState, useMemo } from 'react';
import { BONE_DATA } from './constants';
import { Bone, BoneCategory } from './types';
import BoneCard from './components/BoneCard';
import { GetCategoryIcon, ScienceIcon } from './components/icons';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

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
    // Sort categories by a predefined order or alphabetically
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

      <div className="mb-10 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search bones (e.g., Femur, Skull, Tibia)..."
          className="w-full p-4 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-300 shadow-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
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

      <footer className="text-center mt-16 pt-8 border-t border-slate-700">
        <p className="text-slate-500 text-sm">
          Osteology Explorer &copy; {new Date().getFullYear()}. All data for educational purposes.
        </p>
      </footer>
    </div>
  );
};

export default App;

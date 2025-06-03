
import React from 'react';
import { Bone } from '../types';

interface BoneCardProps {
  bone: Bone;
}

const BoneCard: React.FC<BoneCardProps> = ({ bone }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 shadow-lg hover:shadow-cyan-500/30 hover:border-cyan-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-semibold text-cyan-400 mb-2">{bone.name}</h3>
        {bone.scientificName && (
          <p className="text-sm text-slate-400 italic mb-1">({bone.scientificName})</p>
        )}
        <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">{bone.category}</p>
        <p className="text-slate-300 text-sm mb-3">{bone.description}</p>
      </div>
      {bone.count && (
        <p className="text-xs text-cyan-300 mt-auto pt-3 border-t border-slate-700">
          Count: <span className="font-semibold">{bone.count}</span>
        </p>
      )}
    </div>
  );
};

export default BoneCard;

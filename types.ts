
export enum BoneCategory {
  SKULL = "Skull & Facial Bones",
  SPINE = "Spinal Column",
  THORAX = "Thorax",
  PELVIS = "Pelvis",
  UPPER_LIMB = "Upper Limb",
  HAND = "Hand Bones",
  LOWER_LIMB = "Lower Limb",
  FOOT = "Foot Bones",
  AUDITORY = "Auditory Ossicles",
}

export interface Bone {
  id: string;
  name: string;
  scientificName?: string;
  category: BoneCategory;
  description: string;
  count?: number | string; // e.g., "2 (one per side)", or 7 for cervical vertebrae
}

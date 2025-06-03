
import { Bone, BoneCategory } from './types';

export const BONE_DATA: Bone[] = [
  // Skull
  { id: 'skull_frontal', name: 'Frontal Bone', category: BoneCategory.SKULL, scientificName: 'Os frontale', description: 'Forms the forehead and the superior part of the orbits.', count: 1 },
  { id: 'skull_parietal', name: 'Parietal Bone', category: BoneCategory.SKULL, scientificName: 'Os parietale', description: 'Forms the sides and roof of the cranium.', count: 2 },
  { id: 'skull_temporal', name: 'Temporal Bone', category: BoneCategory.SKULL, scientificName: 'Os temporale', description: 'Forms parts of the sides and base of the cranium.', count: 2 },
  { id: 'skull_occipital', name: 'Occipital Bone', category: BoneCategory.SKULL, scientificName: 'Os occipitale', description: 'Forms the posterior part and most of the base of the cranium.', count: 1 },
  { id: 'skull_sphenoid', name: 'Sphenoid Bone', category: BoneCategory.SKULL, scientificName: 'Os sphenoidale', description: 'Butterfly-shaped bone at the base of the skull.', count: 1 },
  { id: 'skull_ethmoid', name: 'Ethmoid Bone', category: BoneCategory.SKULL, scientificName: 'Os ethmoidale', description: 'Located between the orbits, forms part of the nasal cavity.', count: 1 },
  { id: 'skull_mandible', name: 'Mandible', category: BoneCategory.SKULL, scientificName: 'Mandibula', description: 'The lower jawbone, largest and strongest bone of the face.', count: 1 },
  { id: 'skull_maxilla', name: 'Maxilla', category: BoneCategory.SKULL, scientificName: 'Maxilla', description: 'Forms the upper jaw and parts of the orbit and nasal cavity.', count: 2 },
  { id: 'skull_zygomatic', name: 'Zygomatic Bone', category: BoneCategory.SKULL, scientificName: 'Os zygomaticum', description: 'The cheekbone.', count: 2 },
  { id: 'skull_nasal', name: 'Nasal Bone', category: BoneCategory.SKULL, scientificName: 'Os nasale', description: 'Forms the bridge of the nose.', count: 2 },
  { id: 'skull_lacrimal', name: 'Lacrimal Bone', category: BoneCategory.SKULL, scientificName: 'Os lacrimale', description: 'Smallest and most fragile bone of the face, houses the lacrimal sac.', count: 2 },
  { id: 'skull_palatine', name: 'Palatine Bone', category: BoneCategory.SKULL, scientificName: 'Os palatinum', description: 'L-shaped bone forming part of the hard palate and nasal cavity.', count: 2 },
  { id: 'skull_inf_nasal_concha', name: 'Inferior Nasal Concha', category: BoneCategory.SKULL, scientificName: 'Concha nasalis inferior', description: 'Scroll-like bone on the lateral wall of the nasal cavity.', count: 2 },
  { id: 'skull_vomer', name: 'Vomer', category: BoneCategory.SKULL, scientificName: 'Vomer', description: 'Forms the inferior part of the nasal septum.', count: 1 },

  // Auditory Ossicles
  { id: 'auditory_malleus', name: 'Malleus', category: BoneCategory.AUDITORY, description: 'Hammer-shaped bone in the middle ear.', count: 2 },
  { id: 'auditory_incus', name: 'Incus', category: BoneCategory.AUDITORY, description: 'Anvil-shaped bone in the middle ear.', count: 2 },
  { id: 'auditory_stapes', name: 'Stapes', category: BoneCategory.AUDITORY, description: 'Stirrup-shaped bone in the middle ear, smallest bone in the human body.', count: 2 },
  
  // Spine
  { id: 'spine_cervical', name: 'Cervical Vertebrae (C1-C7)', category: BoneCategory.SPINE, description: 'Seven vertebrae forming the neck region. C1 is Atlas, C2 is Axis.', count: 7 },
  { id: 'spine_thoracic', name: 'Thoracic Vertebrae (T1-T12)', category: BoneCategory.SPINE, description: 'Twelve vertebrae articulating with the ribs.', count: 12 },
  { id: 'spine_lumbar', name: 'Lumbar Vertebrae (L1-L5)', category: BoneCategory.SPINE, description: 'Five vertebrae in the lower back.', count: 5 },
  { id: 'spine_sacrum', name: 'Sacrum', category: BoneCategory.SPINE, scientificName: 'Os sacrum', description: 'Triangular bone formed by fusion of five sacral vertebrae.', count: '1 (5 fused)' },
  { id: 'spine_coccyx', name: 'Coccyx', category: BoneCategory.SPINE, scientificName: 'Os coccygis', description: 'Tailbone, formed by fusion of typically four coccygeal vertebrae.', count: '1 (3-5 fused)' },

  // Thorax
  { id: 'thorax_sternum', name: 'Sternum', category: BoneCategory.THORAX, scientificName: 'Sternum', description: 'Breastbone, located in the center of the chest.', count: 1 },
  { id: 'thorax_ribs', name: 'Ribs', category: BoneCategory.THORAX, scientificName: 'Costae', description: 'Twelve pairs of bones forming the rib cage. (True, False, Floating)', count: '24 (12 pairs)' },
  
  // Pelvis
  { id: 'pelvis_hip', name: 'Hip Bone (Os Coxae)', category: BoneCategory.PELVIS, scientificName: 'Os coxae / Innominate bone', description: 'Large, flattened, irregularly shaped bone, constricted in the center and expanded above and below. Composed of Ilium, Ischium, and Pubis.', count: 2 },

  // Upper Limb
  { id: 'upper_clavicle', name: 'Clavicle', category: BoneCategory.UPPER_LIMB, scientificName: 'Clavicula', description: 'Collarbone.', count: 2 },
  { id: 'upper_scapula', name: 'Scapula', category: BoneCategory.UPPER_LIMB, scientificName: 'Scapula', description: 'Shoulder blade.', count: 2 },
  { id: 'upper_humerus', name: 'Humerus', category: BoneCategory.UPPER_LIMB, scientificName: 'Humerus', description: 'Bone of the upper arm.', count: 2 },
  { id: 'upper_radius', name: 'Radius', category: BoneCategory.UPPER_LIMB, scientificName: 'Radius', description: 'Forearm bone on the thumb side.', count: 2 },
  { id: 'upper_ulna', name: 'Ulna', category: BoneCategory.UPPER_LIMB, scientificName: 'Ulna', description: 'Forearm bone on the pinky side.', count: 2 },

  // Hand Bones
  { id: 'hand_carpals', name: 'Carpals', category: BoneCategory.HAND, description: 'Eight small bones forming the wrist: Scaphoid, Lunate, Triquetrum, Pisiform, Trapezium, Trapezoid, Capitate, Hamate.', count: '16 (8 per hand)' },
  { id: 'hand_metacarpals', name: 'Metacarpals', category: BoneCategory.HAND, description: 'Five bones forming the palm of the hand.', count: '10 (5 per hand)' },
  { id: 'hand_phalanges', name: 'Phalanges (Hand)', category: BoneCategory.HAND, description: 'Bones of the fingers (Proximal, Middle, Distal). Thumb has two.', count: '28 (14 per hand)' },

  // Lower Limb
  { id: 'lower_femur', name: 'Femur', category: BoneCategory.LOWER_LIMB, scientificName: 'Femur', description: 'Thigh bone, longest and strongest bone in the body.', count: 2 },
  { id: 'lower_patella', name: 'Patella', category: BoneCategory.LOWER_LIMB, scientificName: 'Patella', description: 'Kneecap.', count: 2 },
  { id: 'lower_tibia', name: 'Tibia', category: BoneCategory.LOWER_LIMB, scientificName: 'Tibia', description: 'Shinbone, larger of the two lower leg bones.', count: 2 },
  { id: 'lower_fibula', name: 'Fibula', category: BoneCategory.LOWER_LIMB, scientificName: 'Fibula', description: 'Smaller bone of the lower leg, lateral to the tibia.', count: 2 },

  // Foot Bones
  { id: 'foot_tarsals', name: 'Tarsals', category: BoneCategory.FOOT, description: 'Seven bones forming the ankle and upper foot: Calcaneus, Talus, Navicular, Cuboid, Medial Cuneiform, Intermediate Cuneiform, Lateral Cuneiform.', count: '14 (7 per foot)' },
  { id: 'foot_metatarsals', name: 'Metatarsals', category: BoneCategory.FOOT, description: 'Five bones forming the main part of the foot.', count: '10 (5 per foot)' },
  { id: 'foot_phalanges', name: 'Phalanges (Foot)', category: BoneCategory.FOOT, description: 'Bones of the toes (Proximal, Middle, Distal). Big toe has two.', count: '28 (14 per foot)' },
];

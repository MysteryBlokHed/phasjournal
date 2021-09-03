export enum Evidence {
  Emf5 = 'EMF 5',
  SpiritBox = 'Spirit Box',
  Fingerprints = 'Fingerprints',
  GhostOrbs = 'Ghost Orbs',
  GhostWriting = 'Ghost Writing',
  Freezing = 'Freezing Temperatures',
  DotsProjector = 'D.O.T.S Projector',
}

export interface Ghost {
  type: string
  evidence: Array<Evidence>
  strength: string
  weakness: string
}

export const AllGhosts: Array<Ghost> = [
  {
    type: 'Spirit',
    evidence: [Evidence.Emf5, Evidence.SpiritBox, Evidence.GhostWriting],
    strength: 'None',
    weakness: 'Smudge sticks will stop attacks for a long period of time',
  },
  {
    type: 'Wraith',
    evidence: [Evidence.Emf5, Evidence.SpiritBox, Evidence.DotsProjector],
    strength: `Can't be tracked by footsteps`,
    weakness: 'Toxic reaction to salt',
  },
  {
    type: 'Phantom',
    evidence: [
      Evidence.SpiritBox,
      Evidence.Fingerprints,
      Evidence.DotsProjector,
    ],
    strength: 'Looking at a it significantly lowers your sanity',
    weakness: 'Taking a photo will make it go away for some time',
  },
  {
    type: 'Poltergeist',
    evidence: [
      Evidence.SpiritBox,
      Evidence.Fingerprints,
      Evidence.GhostWriting,
    ],
    strength: 'Can throw many objects at once',
    weakness: 'Almost ineffective in an empty room',
  },
  {
    type: 'Banshee',
    evidence: [
      Evidence.Fingerprints,
      Evidence.GhostOrbs,
      Evidence.DotsProjector,
    ],
    strength: 'Only targets one person at a time',
    weakness: 'Less active near a Crucifix',
  },
  {
    type: 'Jinn',
    evidence: [Evidence.Emf5, Evidence.Fingerprints, Evidence.Freezing],
    strength: 'Travels faster when its victim is farther away',
    weakness: 'Disabling the breaker disables its ability',
  },
  {
    type: 'Mare',
    evidence: [Evidence.SpiritBox, Evidence.GhostOrbs, Evidence.GhostWriting],
    strength: 'Increased chance of attacking in the dark',
    weakness: 'Turning lights on will make it less likely to attack',
  },
  {
    type: 'Revenant',
    evidence: [Evidence.GhostOrbs, Evidence.GhostWriting, Evidence.Freezing],
    strength: 'Travels faster while hunting',
    weakness: 'Hiding will make it move much slower',
  },
  {
    type: 'Shade',
    evidence: [Evidence.Emf5, Evidence.GhostOrbs, Evidence.Freezing],
    strength: 'Being shy makes the ghost harder to find',
    weakness: `Doesn't hunt with multiple people nearby`,
  },
  {
    type: 'Demon',
    evidence: [Evidence.Fingerprints, Evidence.GhostWriting, Evidence.Freezing],
    strength: 'Attacks more than any other ghost',
    weakness: 'Answered Ouija Board questions do not lower sanity',
  },
  {
    type: 'Yurei',
    evidence: [Evidence.GhostOrbs, Evidence.Freezing, Evidence.DotsProjector],
    strength: 'Has a strong effect on sanity',
    weakness:
      'Using Smudge Sticks in the ghost room will stop it wandering for some time',
  },
  {
    type: 'Oni',
    evidence: [Evidence.Emf5, Evidence.Freezing, Evidence.DotsProjector],
    strength: 'More active with more people and can moves objects fast',
    weakness: 'Being more active makes it easier to find',
  },
  {
    type: 'Hantu',
    evidence: [
      Evidence.Fingerprints,
      Evidence.GhostOrbs,
      Evidence.Freezing,
    ],
    strength: 'Moves faster at lower temperatures',
    weakness: 'Moves slower at higher temperatures',
  },
  {
    type: 'Yokai',
    evidence: [Evidence.SpiritBox, Evidence.GhostOrbs, Evidence.DotsProjector],
    strength: 'Talking near the ghost increses attack chance',
    weakness: 'Can only hear nearby voices when hunting',
  },
  {
    type: 'Goryo',
    evidence: [Evidence.Emf5, Evidence.Fingerprints, Evidence.DotsProjector],
    strength: 'Only appears on camera with nobody nearby',
    weakness: 'Rarely seen far from ghost room',
  },
  {
    type: 'Myling',
    evidence: [Evidence.Emf5, Evidence.Fingerprints, Evidence.GhostWriting],
    strength: 'Quieter while hunting',
    weakness: 'More frequently makes paranormal sounds',
  },
]

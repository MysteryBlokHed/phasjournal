export enum Evidence {
  Emf5 = 'EMF 5',
  SpiritBox = 'Spirit Box',
  Fingerprints = 'Fingerprints',
  GhostOrbs = 'Ghost Orbs',
  GhostWriting = 'Ghost Writing',
  Freezing = 'Freezing Temperatures',
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
    evidence: [
      Evidence.SpiritBox,
      Evidence.Fingerprints,
      Evidence.GhostWriting,
    ],
    strength: 'Nothing.',
    weakness:
      'Using Smudge Sticks on a spirit will stop it attacking for a long period of time.',
  },
  {
    type: 'Wraith',
    evidence: [Evidence.SpiritBox, Evidence.Fingerprints, Evidence.Freezing],
    strength:
      "Wraiths almost never touch the ground meaning it can't be tracked by footsteps.",
    weakness: 'Wraiths have a toxic reaction to Salt.',
  },
  {
    type: 'Phantom',
    evidence: [Evidence.Emf5, Evidence.GhostOrbs, Evidence.Freezing],
    strength: 'Looking at a Phantom will considerably drop your sanity.',
    weakness:
      'Taking a photo of the Phantom will make it temporarily disappear.',
  },
  {
    type: 'Poltergeist',
    evidence: [Evidence.SpiritBox, Evidence.Fingerprints, Evidence.GhostOrbs],
    strength: 'A Poltergeist can throw huge amounts of objects at once.',
    weakness: 'A Poltergeist is almost ineffective in an empty room.',
  },
  {
    type: 'Banshee',
    evidence: [Evidence.Emf5, Evidence.Fingerprints, Evidence.Freezing],
    strength: 'A Banshee will only target one person at a time.',
    weakness:
      'Banshees fear the Crucifix and will be less aggressive when near one.',
  },
  {
    type: 'Jinn',
    evidence: [Evidence.Emf5, Evidence.SpiritBox, Evidence.GhostOrbs],
    strength: 'A Jinn will travel at a faster speed if its victim is far away.',
    weakness:
      'Turning off the locations power source will prevent the Jinn from using its ability.',
  },
  {
    type: 'Mare',
    evidence: [Evidence.SpiritBox, Evidence.GhostOrbs, Evidence.Freezing],
    strength: 'A Mare will have an increased chance to attack in the dark.',
    weakness:
      'Turning the lights on around the Mare will lower its chance to attack.',
  },
  {
    type: 'Revenant',
    evidence: [Evidence.Emf5, Evidence.Fingerprints, Evidence.GhostWriting],
    strength:
      'A Revenant will travel at a significantly faster speed when hunting a victim.',
    weakness: 'Hiding from the Revenant will cause it to move very slowly.',
  },
  {
    type: 'Shade',
    evidence: [Evidence.Emf5, Evidence.GhostOrbs, Evidence.GhostWriting],
    strength: 'Being shy means the Ghost will be harder to find.',
    weakness:
      'The Ghost will not enter hunting mode if there is multiple people nearby.',
  },
  {
    type: 'Demon',
    evidence: [Evidence.SpiritBox, Evidence.GhostWriting, Evidence.Freezing],
    strength: 'Demons will attack more often than any other Ghost.',
    weakness:
      "Asking a Demon successful questions on the Ouija Board won't lower the users sanity.",
  },
  {
    type: 'Yurei',
    evidence: [Evidence.GhostOrbs, Evidence.GhostWriting, Evidence.Freezing],
    strength:
      "Yurei's have been known to have a stronger effect on people sanity.",
    weakness:
      "Smudging the Yurei's room will cause it to not wander around the location for a long time.",
  },
  {
    type: 'Oni',
    evidence: [Evidence.Emf5, Evidence.SpiritBox, Evidence.GhostWriting],
    strength:
      "Oni's are more active when people are nearby and have been seen moving objects at great speed.",
    weakness: 'Being more active make the Oni easier to find and identify.',
  },
]

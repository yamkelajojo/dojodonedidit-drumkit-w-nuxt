export default function getInstruments() {
  const drums = [
    {
      keyTitle: "A",
      id: "65",
      sound: "Clap",
      url: "assets/audio/Clap.wav",
      icon: "twemoji:clapping-hands",
      description:
        "Serves as an accent or emphasis, adding a sharp and crisp sound to the rhythm. Typically placed on the 2nd and 4th beats of a measure.",
      category: "Percussion",
    },
    {
      keyTitle: "S",
      id: "83",
      sound: "HiHat",
      url: "assets/audio/HiHat.wav",
      icon: "twemoji:chopsticks",
      description:
        "Provides a continuous, tight, and metallic sound. The hi-hat plays a crucial role in maintaining the rhythm and adding a sense of movement. It is typically played in a continuous pattern throughout the beat, alternating between open and closed positions",
      category: "Percussion",
    },
    {
      keyTitle: "D",
      id: "68",
      sound: "Kick",
      url: "assets/audio/Kick.wav",
      icon: "twemoji:hiking-boot",
      description:
        "Is the foundational element of the beat, providing a deep and booming bass sound. It delivers the rhythmic pulse and drives the entire track. The kick is typically placed on the first beat of each measure, establishing the core rhythm and groove.",
    },
    {
      keyTitle: "F",
      id: "70",
      sound: "Open Hat",
      url: "assets/audio/OpenHat.wav",
      icon: "twemoji:ice-skate",
      description:
        "Is a more pronounced and sustained version of the hi-hat. It adds a brighter and more open sound to the rhythm. The open hat is often used to add variation and intensity to the beat, usually played in specific sections or as accents.",
      category: "Percussion",
    },
    {
      keyTitle: "G",
      id: "71",
      sound: "Boom",
      url: "assets/audio/808.wav",
      icon: "twemoji:bomb",
      description:
        "Produces a distinct low-frequency punch, often associated with sub-bass tones produces a distinct low-frequency punch, often associated with sub-bass tones",
      category: "Drums",
    },
    {
      keyTitle: "H",
      id: "72",
      sound: "Rim",
      url: "assets/audio/Rim.wav",
      icon: "twemoji:wheel",
      description:
        "Produces a sharp and metallic click sound. It is often used to add a sharp accent or a subtle layer of texture to the beat. The rim is typically placed on off-beats or used in specific rhythmic patterns to create syncopation and add interest.",
      category: "Percussion",
    },
    {
      keyTitle: "J",
      id: "74",
      sound: "Snare",
      url: "assets/audio/Snare.wav",
      icon: "twemoji:badminton",
      description:
        "Provides a sharp and crisp sound. It serves as a key element of the backbeat, usually played on the second and fourth beats of a measure. The snare adds groove, impact, and defines the overall rhythm of the track",
      category: "Drums",
    },
    {
      keyTitle: "K",
      id: "75",
      sound: "Tom",
      url: "assets/audio/Tom.wav",
      icon: "twemoji:long-drum",
      description:
        "Medium to high-pitched drums that produce melodic and resonant tones. They are used to add fills, transitions, and dynamics to the beat. Toms are often played in ascending or descending patterns, creating rhythmic interest and variation",
      category: "Drums",
    },
    {
      keyTitle: "L",
      id: "76",
      sound: "Tink",
      url: "assets/audio/Tink.wav",
      icon: "twemoji:triangular-ruler",
      description:
        "Is a percussive instrument that produces a high-pitched and shimmering sound. It is commonly used to add accents, subtle touches, and a touch of brightness to the beat. The triangle is often played sparingly, adding a delicate and ethereal quality",
      category: "Percussion",
    },
  ];
  return drums;
}

import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN I: PILIHAN GANDA (10 BUTIR SOAL: NO. 1 - 10)
  // Setiap butir bernilai skor 1 (Total skor PG = 10)
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'The Animal Kingdom - Mammals',
    difficulty: 'Mudah',
    text: 'Dolphins and blue whales live in the ocean and swim just like fish. However, scientists classify them as mammals. What is the main reason dolphins and whales are classified as mammals?',
    options: [
      { id: 'A', text: 'They breathe air using lungs and nurse their young with milk' },
      { id: 'B', text: 'They have wet scales and breathe dissolved oxygen with gills' },
      { id: 'C', text: 'They lay hard-shelled eggs in underground sand nests' },
      { id: 'D', text: 'They are cold-blooded animals with smooth slimy skin' },
    ],
    correctAnswer: 'A',
    explanation:
      'Dolphins and whales are mammals because they are warm-blooded, breathe atmospheric air using lungs (via blowholes), give birth to live calves, and mothers produce milk to feed their young.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'The Animal Kingdom - Birds & Vertebrate Groups',
    difficulty: 'Mudah',
    text: 'Look at the Animal Kingdom classification chart below!\n\nWhich animal belongs to the BIRD group (Aves), even though it cannot fly in the air and uses its wings as flippers to swim in cold oceans?',
    imageSvg: `<svg viewBox="0 0 540 200" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradMammal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0284c7" />
          <stop offset="100%" stop-color="#0369a1" />
        </linearGradient>
        <linearGradient id="gradBird" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#059669" />
          <stop offset="100%" stop-color="#047857" />
        </linearGradient>
        <linearGradient id="gradReptile" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#d97706" />
          <stop offset="100%" stop-color="#b45309" />
        </linearGradient>
        <linearGradient id="gradAmphibian" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#7c3aed" />
          <stop offset="100%" stop-color="#6d28d9" />
        </linearGradient>
        <linearGradient id="gradFish" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#e11d48" />
          <stop offset="100%" stop-color="#be123c" />
        </linearGradient>
      </defs>
      <rect width="540" height="200" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="270" y="22" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle" letter-spacing="0.5">THE ANIMAL KINGDOM - 5 VERTEBRATE GROUPS</text>
      
      <!-- Card 1: Mammals -->
      <g transform="translate(12, 34)">
        <rect width="98" height="150" rx="8" fill="url(#gradMammal)" />
        <circle cx="49" cy="26" r="14" fill="rgba(255,255,255,0.2)"/>
        <text x="49" y="31" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">M</text>
        <text x="49" y="54" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">MAMMALS</text>
        <text x="49" y="70" font-size="8" fill="#e0f2fe" text-anchor="middle">Hair / Fur</text>
        <text x="49" y="82" font-size="8" fill="#e0f2fe" text-anchor="middle">Lungs • Milk</text>
        <rect x="6" y="94" width="86" height="46" rx="4" fill="rgba(0,0,0,0.2)"/>
        <text x="49" y="110" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">Examples:</text>
        <text x="49" y="122" font-size="7.5" fill="#f0f9ff" text-anchor="middle">Lion, Cat, Bat</text>
        <text x="49" y="133" font-size="7.5" fill="#f0f9ff" text-anchor="middle">Dolphin, Whale</text>
      </g>

      <!-- Card 2: Birds -->
      <g transform="translate(116, 34)">
        <rect width="98" height="150" rx="8" fill="url(#gradBird)" stroke="#34d399" stroke-width="2"/>
        <circle cx="49" cy="26" r="14" fill="rgba(255,255,255,0.25)"/>
        <text x="49" y="31" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">B</text>
        <text x="49" y="54" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">BIRDS</text>
        <text x="49" y="70" font-size="8" fill="#d1fae5" text-anchor="middle">Feathers • Wings</text>
        <text x="49" y="82" font-size="8" fill="#d1fae5" text-anchor="middle">Beak • Hard Eggs</text>
        <rect x="6" y="94" width="86" height="46" rx="4" fill="rgba(0,0,0,0.25)"/>
        <text x="49" y="110" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">Examples:</text>
        <text x="49" y="122" font-size="7.5" fill="#ffffff" text-anchor="middle">Eagle, Parrot</text>
        <text x="49" y="133" font-size="7.5" font-weight="bold" fill="#a7f3d0" text-anchor="middle">Penguin (Aves)</text>
      </g>

      <!-- Card 3: Reptiles -->
      <g transform="translate(220, 34)">
        <rect width="98" height="150" rx="8" fill="url(#gradReptile)" />
        <circle cx="49" cy="26" r="14" fill="rgba(255,255,255,0.2)"/>
        <text x="49" y="31" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">R</text>
        <text x="49" y="54" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">REPTILES</text>
        <text x="49" y="70" font-size="8" fill="#fef3c7" text-anchor="middle">Dry Scales</text>
        <text x="49" y="82" font-size="8" fill="#fef3c7" text-anchor="middle">Cold-blooded</text>
        <rect x="6" y="94" width="86" height="46" rx="4" fill="rgba(0,0,0,0.2)"/>
        <text x="49" y="110" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">Examples:</text>
        <text x="49" y="122" font-size="7.5" fill="#fffbeb" text-anchor="middle">Snake, Lizard</text>
        <text x="49" y="133" font-size="7.5" fill="#fffbeb" text-anchor="middle">Crocodile, Turtle</text>
      </g>

      <!-- Card 4: Amphibians -->
      <g transform="translate(324, 34)">
        <rect width="98" height="150" rx="8" fill="url(#gradAmphibian)" />
        <circle cx="49" cy="26" r="14" fill="rgba(255,255,255,0.2)"/>
        <text x="49" y="31" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">A</text>
        <text x="49" y="54" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">AMPHIBIANS</text>
        <text x="49" y="70" font-size="8" fill="#ede9fe" text-anchor="middle">Moist Skin</text>
        <text x="49" y="82" font-size="8" fill="#ede9fe" text-anchor="middle">Water &amp; Land</text>
        <rect x="6" y="94" width="86" height="46" rx="4" fill="rgba(0,0,0,0.2)"/>
        <text x="49" y="110" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">Examples:</text>
        <text x="49" y="122" font-size="7.5" fill="#f5f3ff" text-anchor="middle">Frog, Toad</text>
        <text x="49" y="133" font-size="7.5" fill="#f5f3ff" text-anchor="middle">Salamander</text>
      </g>

      <!-- Card 5: Fish -->
      <g transform="translate(428, 34)">
        <rect width="98" height="150" rx="8" fill="url(#gradFish)" />
        <circle cx="49" cy="26" r="14" fill="rgba(255,255,255,0.2)"/>
        <text x="49" y="31" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">F</text>
        <text x="49" y="54" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">FISH</text>
        <text x="49" y="70" font-size="8" fill="#ffe4e6" text-anchor="middle">Gills &amp; Fins</text>
        <text x="49" y="82" font-size="8" fill="#ffe4e6" text-anchor="middle">Aquatic Life</text>
        <rect x="6" y="94" width="86" height="46" rx="4" fill="rgba(0,0,0,0.2)"/>
        <text x="49" y="110" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">Examples:</text>
        <text x="49" y="122" font-size="7.5" fill="#fff1f2" text-anchor="middle">Shark, Clownfish</text>
        <text x="49" y="133" font-size="7.5" fill="#fff1f2" text-anchor="middle">Goldfish, Tuna</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Penguin' },
      { id: 'B', text: 'Bat' },
      { id: 'C', text: 'Flying fish' },
      { id: 'D', text: 'Seal' },
    ],
    correctAnswer: 'A',
    explanation:
      'Penguins are flightless birds. They have feathers, lay hard-shelled eggs, have beaks, and are warm-blooded, which defines them as members of the bird class (Aves). Bats are mammals, seals are mammals, and flying fish are fish.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'The Animal Kingdom - Amphibians',
    difficulty: 'Mudah',
    text: 'Frogs and toads are fascinating creatures. When they hatch from jelly-like eggs in the water, their tadpoles breathe using gills. When they grow into adults, they develop lungs and can also breathe through their moist, smooth skin. To which group do they belong?',
    options: [
      { id: 'A', text: 'Mammals' },
      { id: 'B', text: 'Amphibians' },
      { id: 'C', text: 'Reptiles' },
      { id: 'D', text: 'Fish' },
    ],
    correctAnswer: 'B',
    explanation:
      'Amphibians (such as frogs, toads, and salamanders) live a double life (in water and on land), undergo metamorphosis, have moist skin without scales, and breathe with gills in the larval stage and lungs/skin as adults.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'The Animal Kingdom - Reptiles',
    difficulty: 'Mudah',
    text: 'Komodo dragons and sea turtles have dry, rough skin covered with waterproof scales. They are cold-blooded animals and lay eggs on land. Which vertebrate group do they belong to?',
    options: [
      { id: 'A', text: 'Birds' },
      { id: 'B', text: 'Amphibians' },
      { id: 'C', text: 'Reptiles' },
      { id: 'D', text: 'Mammals' },
    ],
    correctAnswer: 'C',
    explanation:
      'Reptiles (including snakes, lizards, crocodiles, Komodo dragons, and turtles) are cold-blooded vertebrates characterized by dry, scaly skin and laying leathery eggs on land.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'The Animal Kingdom - Fish',
    difficulty: 'Mudah',
    text: 'Clownfish, salmon, and sharks spend their entire lives in water. They use their fins and streamlined bodies to swim. To absorb dissolved oxygen directly from water, they breathe using their...',
    options: [
      { id: 'A', text: 'Lungs' },
      { id: 'B', text: 'Gills' },
      { id: 'C', text: 'Moist skin' },
      { id: 'D', text: 'Air sacs' },
    ],
    correctAnswer: 'B',
    explanation:
      'Fish absorb dissolved oxygen from water through their gills (insang) as water flows over the gill filaments.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Mengenal Past Tense - Regular Verbs',
    difficulty: 'Sedang',
    text: 'Read the travel log below!\n\n"Last Saturday, Kadek and his classmates _______ Bali Safari and Marine Park to study different animals for their science project."\n\nWhich regular past tense verb (Verb 2) correctly completes the sentence?',
    imageSvg: `<svg viewBox="0 0 500 140" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="140" fill="#fffbeb" rx="12" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,4"/>
      <rect x="15" y="15" width="470" height="110" rx="8" fill="#ffffff" stroke="#fcd34d" stroke-width="1"/>
      <text x="35" y="42" font-size="14" font-weight="bold" fill="#b45309">BALI SAFARI PARK VISITOR PASS</text>
      <text x="35" y="62" font-size="10" fill="#64748b">Date: <tspan font-weight="bold" fill="#0f172a">Last Saturday (Past Event)</tspan></text>
      <text x="35" y="80" font-size="10" fill="#64748b">Activity: <tspan font-weight="bold" fill="#0f172a">Observing Mammals, Birds, and Reptiles</tspan></text>
      <text x="35" y="98" font-size="10" fill="#64748b">Sentence: <tspan font-style="italic" fill="#2563eb">"We _______ (visit) the safari park last Saturday."</tspan></text>
      <circle cx="430" cy="70" r="28" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <text x="430" y="68" font-size="9" font-weight="bold" fill="#92400e" text-anchor="middle">VERB 2</text>
      <text x="430" y="82" font-size="8" fill="#b45309" text-anchor="middle">-ed form</text>
    </svg>`,
    options: [
      { id: 'A', text: 'visit' },
      { id: 'B', text: 'visited' },
      { id: 'C', text: 'visiting' },
      { id: 'D', text: 'visits' },
    ],
    correctAnswer: 'B',
    explanation:
      'Because the sentence takes place in the past ("Last Saturday"), we use Simple Past Tense. "Visit" is a regular verb whose past form (Verb 2) is formed by adding -ed: "visited".',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Mengenal Past Tense - Irregular Verbs',
    difficulty: 'Sedang',
    text: '"Yesterday morning, Wayan walked through the garden and _______ a colorful kingfisher bird catching small fish in the pond."\n\nWhat is the correct irregular past tense verb (Verb 2) of "see"?',
    options: [
      { id: 'A', text: 'saw' },
      { id: 'B', text: 'seed' },
      { id: 'C', text: 'seen' },
      { id: 'D', text: 'sees' },
    ],
    correctAnswer: 'A',
    explanation:
      'The verb "see" is an irregular verb. Its Simple Past Tense form (Verb 2) is "saw", not "seed" or "seen".',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Mengenal Past Tense - To Be (Was)',
    difficulty: 'Sedang',
    text: 'Complete the sentence with the correct past form of to be:\n\n"The Bengal tiger _______ very calm while resting under the shady tree yesterday afternoon."',
    options: [
      { id: 'A', text: 'was' },
      { id: 'B', text: 'were' },
      { id: 'C', text: 'are' },
      { id: 'D', text: 'is' },
    ],
    correctAnswer: 'A',
    explanation:
      '"The Bengal tiger" is a singular third-person subject (it). In the Simple Past Tense, singular subjects use the past to be "was".',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Mengenal Past Tense - To Be (Were)',
    difficulty: 'Sedang',
    text: 'Complete the sentence with the correct past form of to be:\n\n"Three days ago, the little ducklings _______ very noisy as they followed their mother into the river."',
    options: [
      { id: 'A', text: 'was' },
      { id: 'B', text: 'were' },
      { id: 'C', text: 'is' },
      { id: 'D', text: 'been' },
    ],
    correctAnswer: 'B',
    explanation:
      '"The little ducklings" is a plural subject (they). In the Simple Past Tense, plural subjects take "were".',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Mengenal Past Tense - Negative Form',
    difficulty: 'Sedang',
    text: 'Look at the negative sentence in Simple Past Tense:\n\n"Budi _______ not touch the poisonous green snake when the zoo guide showed it last week."\n\nWhich auxiliary verb correctly completes the negative past sentence?',
    options: [
      { id: 'A', text: 'does' },
      { id: 'B', text: 'did' },
      { id: 'C', text: 'do' },
      { id: 'D', text: 'is' },
    ],
    correctAnswer: 'B',
    explanation:
      'In Simple Past Tense, negative sentences use the auxiliary verb "did" + not + base verb (Verb 1): "did not touch".',
  },

  // =========================================================================
  // BAGIAN II: PILIHAN GANDA KOMPLEKS (5 BUTIR SOAL: NO. 11 - 15)
  // Setiap butir bernilai skor 1 (Pilih semua jawaban yang benar)
  // =========================================================================
  {
    id: 11,
    type: 'pgk',
    topic: 'The Animal Kingdom - Mammals Characteristics',
    difficulty: 'Sedang',
    text: 'Which of the following statements about MAMMALS are TRUE? (Select all correct answers)',
    options: [
      { id: 'A', text: 'Mammals have hair or fur covering their bodies.' },
      { id: 'B', text: 'Mother mammals feed their newborn babies with milk.' },
      { id: 'C', text: 'All mammals lay hard-shelled eggs in high trees.' },
      { id: 'D', text: 'Kangaroos, cats, and fruit bats are examples of mammals.' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      'Pernyataan A, B, dan D benar. Hampir semua mamalia melahirkan anak (vivipar) dan menyusui bayinya dengan kelenjar susu, serta memiliki bulu/rambut. Pernyataan C salah karena bertelur cangkang keras di pohon adalah ciri khas burung, bukan mamalia.',
  },
  {
    id: 12,
    type: 'pgk',
    topic: 'The Animal Kingdom - Reptiles',
    difficulty: 'Sedang',
    text: 'Which of the following animals belong to the REPTILE group? (Select all correct answers)',
    options: [
      { id: 'A', text: 'Saltwater Crocodile' },
      { id: 'B', text: 'Komodo Dragon' },
      { id: 'C', text: 'Tree Frog' },
      { id: 'D', text: 'King Cobra Snake' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      'Saltwater crocodile, Komodo dragon, and King cobra snake are reptiles with dry, scaly skin and lungs. Tree frog is an amphibian, not a reptile.',
  },
  {
    id: 13,
    type: 'pgk',
    topic: 'Mengenal Past Tense - Irregular Verbs (Verb 2)',
    difficulty: 'Sedang',
    text: 'Which of the following are correct IRREGULAR past tense verb forms (Verb 2)? (Select all correct answers)',
    options: [
      { id: 'A', text: 'Go ➔ Went' },
      { id: 'B', text: 'Swim ➔ Swam' },
      { id: 'C', text: 'Fly ➔ Flew' },
      { id: 'D', text: 'Walk ➔ Walked' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Go ➔ went, swim ➔ swam, and fly ➔ flew are irregular verbs because their past forms change irregularly. "Walk ➔ walked" is a regular verb (ends in -ed).',
  },
  {
    id: 14,
    type: 'pgk',
    topic: 'Mengenal Past Tense - Time Markers',
    difficulty: 'Sedang',
    text: 'Which of the following time adverbials are commonly used to indicate the SIMPLE PAST TENSE? (Select all correct answers)',
    options: [
      { id: 'A', text: 'Yesterday morning' },
      { id: 'B', text: 'Last weekend' },
      { id: 'C', text: 'Two days ago' },
      { id: 'D', text: 'Every morning' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      '"Yesterday morning", "last weekend", and "two days ago" are past time markers used with Simple Past Tense. "Every morning" is used for habitual actions in Simple Present Tense.',
  },
  {
    id: 15,
    type: 'pgk',
    topic: 'The Animal Kingdom - Birds & Fish Adaptations',
    difficulty: 'Sukar',
    text: 'Which statements correctly describe the body adaptations of BIRDS and FISH? (Select all correct answers)',
    options: [
      { id: 'A', text: 'Birds possess lightweight hollow bones and feathers to help them fly.' },
      { id: 'B', text: 'Fish have fins and streamlined bodies to help them propel and steer through water.' },
      { id: 'C', text: 'Fish breathe air on the surface using human-like lungs.' },
      { id: 'D', text: 'Female birds lay hard-shelled eggs to protect the developing chicks inside.' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      'Statements A, B, and D are scientifically accurate. Statement C is incorrect because fish breathe dissolved oxygen from water using gills, not lungs.',
  },

  // =========================================================================
  // BAGIAN III: PGK KATEGORI / BENAR-SALAH (5 BUTIR SOAL: NO. 16 - 20)
  // Setiap butir memuat 4 pernyataan, bernilai skor 1
  // =========================================================================
  {
    id: 16,
    type: 'pgk_kategori',
    topic: 'The Animal Kingdom - Classification Facts',
    difficulty: 'Sedang',
    categoryType: 'benar_salah',
    text: 'Determine whether each statement about vertebrate animal classification is Benar (True) or Salah (False):',
    statements: [
      {
        id: 's1',
        text: 'Bats are flying mammals that give birth to live pups and produce milk.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's2',
        text: 'Frogs and salamanders have dry scaly skin just like desert lizards.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's3',
        text: 'Birds are warm-blooded animals whose bodies are covered in feathers.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's4',
        text: 'Sharks are mammals because they swim in the open sea.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
    ],
    explanation:
      'Pernyataan 1 Benar (kelelawar adalah mamalia terbang). Pernyataan 2 Salah (katak berkulit basah berlendir tanpa sisik). Pernyataan 3 Benar (burung berdarah panas dan berbulu unggas). Pernyataan 4 Salah (hiu adalah ikan bertulang rawan yang bernapas dengan celah insang).',
  },
  {
    id: 17,
    type: 'pgk_kategori',
    topic: 'Mengenal Past Tense - Grammar Rules',
    difficulty: 'Sedang',
    categoryType: 'benar_salah',
    text: 'Determine whether each grammar rule statement about Simple Past Tense is Benar (True) or Salah (False):',
    statements: [
      {
        id: 's1',
        text: 'In negative past sentences, we use "did not" followed by the base form of the verb (Verb 1).',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's2',
        text: 'The past tense form (Verb 2) of the irregular verb "buy" is "bought".',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's3',
        text: 'We use the past to be "was" with the plural pronouns "we", "you", and "they".',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's4',
        text: 'Time markers like "yesterday", "last night", and "an hour ago" indicate past actions.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
    ],
    explanation:
      'Pernyataan 1 Benar (did not + V1). Pernyataan 2 Benar (buy ➔ bought). Pernyataan 3 Salah (pronouns we, you, they menggunakan "were", bukan "was"). Pernyataan 4 Benar (merupakan past time signals).',
  },
  {
    id: 18,
    type: 'pgk_kategori',
    topic: 'The Animal Kingdom - Reptiles & Amphibians',
    difficulty: 'Sedang',
    categoryType: 'benar_salah',
    text: 'Determine whether each statement about reptiles and amphibians is Benar (True) or Salah (False):',
    statements: [
      {
        id: 's1',
        text: 'A chameleon is a reptile that can change skin color to camouflage from predators.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's2',
        text: 'Baby tadpoles breathe with lungs immediately after hatching from eggs.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's3',
        text: 'Crocodiles lay leathery-shelled eggs in nests on dry land.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's4',
        text: 'Amphibians undergo metamorphosis during their life cycle from water to land.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
    ],
    explanation:
      'Pernyataan 1 Benar (bunglon adalah reptil yang berkamuflase). Pernyataan 2 Salah (kecebong bernapas dengan insang saat di air, baru memiliki paru-paru setelah dewasa). Pernyataan 3 Benar (buaya bertelur di darat). Pernyataan 4 Benar (amfibi bermetamorfosis sempurna).',
  },
  {
    id: 19,
    type: 'pgk_kategori',
    topic: 'Mengenal Past Tense - Sentence Accuracy',
    difficulty: 'Sukar',
    categoryType: 'benar_salah',
    text: 'Determine whether each sentence is grammatically CORRECT in Simple Past Tense (Benar) or INCORRECT (Salah):',
    statements: [
      {
        id: 's1',
        text: '"They visited the national bird sanctuary yesterday afternoon."',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's2',
        text: '"Dewi was thrilled when she fed the friendly rabbits this morning."',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's3',
        text: '"He didn\'t went to the reptile park last Sunday."',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's4',
        text: '"We were at the marine aquarium two days ago."',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
    ],
    explanation:
      'Kalimat 1 Benar (visited + yesterday). Kalimat 2 Benar (was thrilled + fed). Kalimat 3 Salah karena setelah auxiliary "didn\'t" harus menggunakan Verb 1 dasar ("didn\'t go", bukan "didn\'t went"). Kalimat 4 Benar (we were + two days ago).',
  },
  {
    id: 20,
    type: 'pgk_kategori',
    topic: 'The Animal Kingdom - Respiration & Reproduction',
    difficulty: 'Sedang',
    categoryType: 'benar_salah',
    text: 'Evaluate whether each statement regarding animal respiration and reproduction is Benar (True) or Salah (False):',
    statements: [
      {
        id: 's1',
        text: 'Female birds lay hard-shelled eggs in nests to hatch their chicks.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's2',
        text: 'Whales and dolphins use gills to absorb oxygen from ocean water.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's3',
        text: 'Adult frogs can absorb oxygen directly through their moist, permeable skin.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's4',
        text: 'Most fish reproduce by laying eggs in water (oviparous).',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
    ],
    explanation:
      'Pernyataan 1 Benar (burung bertelur cangkang keras). Pernyataan 2 Salah (paus dan lumba-lumba bernapas dengan paru-paru dan lubang sembur, bukan insang). Pernyataan 3 Benar (kulit basah katak menyerap oksigen). Pernyataan 4 Benar (mayoritas ikan bertelur di air).',
  },

  // =========================================================================
  // BAGIAN IV: MENJODOHKAN (5 BUTIR SOAL: NO. 21 - 25)
  // Setiap butir memuat 4 premis dan 4 pilihan pasangan, bernilai skor 1
  // =========================================================================
  {
    id: 21,
    type: 'menjodohkan',
    topic: 'The Animal Kingdom - Vertebrate Classes',
    difficulty: 'Sedang',
    text: 'Match each animal in the left column with its correct Animal Kingdom class in the right column:',
    matchingPairs: [
      { id: 'm1', premise: 'Kangaroo (Pouched Animal)', match: 'Mammal' },
      { id: 'm2', premise: 'King Cobra (Scaly Reptile)', match: 'Reptile' },
      { id: 'm3', premise: 'Tree Frog (Moist Skin)', match: 'Amphibian' },
      { id: 'm4', premise: 'Peacock (Colorful Feathers)', match: 'Bird' },
    ],
    explanation:
      'Kangaroo adalah mamalia (marsupial), King Cobra adalah reptil berkulit sisik, Tree Frog adalah amfibi berkulit lembap, dan Peacock (burung merak) adalah burung dengan bulu unggas indah.',
  },
  {
    id: 22,
    type: 'menjodohkan',
    topic: 'Mengenal Past Tense - Irregular Verbs Pairs',
    difficulty: 'Sedang',
    text: 'Match the base verb (Infinitive / V1) with its correct irregular past tense form (Verb 2):',
    matchingPairs: [
      { id: 'm1', premise: 'Eat (Makan)', match: 'Ate' },
      { id: 'm2', premise: 'Fly (Terbang)', match: 'Flew' },
      { id: 'm3', premise: 'Swim (Berenang)', match: 'Swam' },
      { id: 'm4', premise: 'Catch (Menangkap)', match: 'Caught' },
    ],
    explanation:
      'Bentuk Verb 2 lampau tak beraturan: Eat ➔ Ate, Fly ➔ Flew, Swim ➔ Swam, Catch ➔ Caught.',
  },
  {
    id: 23,
    type: 'menjodohkan',
    topic: 'The Animal Kingdom - Respiratory Organs',
    difficulty: 'Sedang',
    text: 'Match each animal with its primary breathing organ or method:',
    matchingPairs: [
      { id: 'm1', premise: 'Goldfish (Fish in water)', match: 'Gills' },
      { id: 'm2', premise: 'Blue Whale (Marine mammal)', match: 'Lungs and blowhole' },
      { id: 'm3', premise: 'Adult Frog (Amphibian)', match: 'Lungs and moist skin' },
      { id: 'm4', premise: 'Bald Eagle (Bird of prey)', match: 'Lungs and air sacs' },
    ],
    explanation:
      'Ikan mas bernapas dengan insang (gills); paus biru bernapas dengan paru-paru dan blowhole; katak dewasa bernapas dengan paru-paru serta kulit lembap; burung elang bernapas dengan paru-paru dibantu pundi-pundi hawa (air sacs).',
  },
  {
    id: 24,
    type: 'menjodohkan',
    topic: 'Mengenal Past Tense - Subject & Past To Be',
    difficulty: 'Sedang',
    text: 'Match each subject phrase with the correct past form of to be (Was or Were):',
    matchingPairs: [
      { id: 'm1', premise: 'The fierce lion (Singular)', match: 'Was' },
      { id: 'm2', premise: 'The caring zookeepers (Plural)', match: 'Were' },
      { id: 'm3', premise: 'My sister and I (We)', match: 'Were' },
      { id: 'm4', premise: 'A green chameleon (Singular)', match: 'Was' },
    ],
    explanation:
      'Subjek tunggal (The lion, A chameleon) berpasangan dengan "Was". Subjek jamak (The zookeepers, My sister and I / We) berpasangan dengan "Were".',
  },
  {
    id: 25,
    type: 'menjodohkan',
    topic: 'The Animal Kingdom - Body Coverings',
    difficulty: 'Sedang',
    text: 'Match the animal group with its characteristic outer body covering:',
    matchingPairs: [
      { id: 'm1', premise: 'Birds (Aves)', match: 'Feathers' },
      { id: 'm2', premise: 'Mammals', match: 'Hair or Fur' },
      { id: 'm3', premise: 'Reptiles', match: 'Dry waterproof scales' },
      { id: 'm4', premise: 'Fish', match: 'Wet slimy scales' },
    ],
    explanation:
      'Burung ditutupi bulu unggas (feathers), mamalia memiliki rambut atau wol/bulu halus (hair/fur), reptil memiliki sisik kering kedap air (dry scales), dan ikan memiliki sisik basah berlendir (wet slimy scales).',
  },

  // =========================================================================
  // BAGIAN V: ISIAN SINGKAT (5 BUTIR SOAL: NO. 26 - 30)
  // Setiap butir bernilai skor 1
  // =========================================================================
  {
    id: 26,
    type: 'isian',
    topic: 'Mengenal Past Tense - Irregular Verb Fill-in',
    difficulty: 'Mudah',
    text: 'Fill in the blank with the correct past tense form (Verb 2) of the verb in brackets:\n\n"Last Sunday, my father and I _______ (go) to the bird park in Denpasar."',
    correctAnswer: 'went',
    acceptedAnswers: ['went', 'Went', 'WENT'],
    explanation:
      'The past tense form (Verb 2) of the irregular verb "go" is "went".',
  },
  {
    id: 27,
    type: 'isian',
    topic: 'The Animal Kingdom - Birds Group Name',
    difficulty: 'Mudah',
    text: 'Animals that are warm-blooded, covered in feathers, have two wings, a toothless beak, and lay hard-shelled eggs are called _______.',
    correctAnswer: 'birds',
    acceptedAnswers: ['birds', 'Birds', 'bird', 'Bird', 'aves', 'Aves'],
    explanation:
      'The group of animals with feathers, wings, beaks, and hard eggs are called "birds" (or Aves in scientific terminology).',
  },
  {
    id: 28,
    type: 'isian',
    topic: 'Mengenal Past Tense - Past To Be Fill-in',
    difficulty: 'Mudah',
    text: 'Fill in the blank with "was" or "were":\n\n"Yesterday, the playful sea otters _______ very lively while splashing in the water."',
    correctAnswer: 'were',
    acceptedAnswers: ['were', 'Were', 'WERE'],
    explanation:
      '"The playful sea otters" is plural (they), so the correct past to be is "were".',
  },
  {
    id: 29,
    type: 'isian',
    topic: 'The Animal Kingdom - Mammals Group Name',
    difficulty: 'Mudah',
    text: 'Animals that have hair or fur, breathe using lungs, and whose mothers produce milk to feed their babies are called _______.',
    correctAnswer: 'mammals',
    acceptedAnswers: ['mammals', 'Mammals', 'mammal', 'Mammal', 'mamalia', 'Mamalia'],
    explanation:
      'Warm-blooded vertebrates that have hair/fur and nurse their young with milk from mammary glands are called "mammals" (mamalia).',
  },
  {
    id: 30,
    type: 'isian',
    topic: 'Mengenal Past Tense - Regular Verb Fill-in',
    difficulty: 'Mudah',
    text: 'Fill in the blank with the correct past tense form (Verb 2) of the regular verb in brackets:\n\n"Two days ago, the naughty monkey _______ (climb) to the top of the tall banyan tree."',
    correctAnswer: 'climbed',
    acceptedAnswers: ['climbed', 'Climbed', 'CLIMBED'],
    explanation:
      '"Climb" is a regular verb. In Simple Past Tense, we add -ed: "climbed".',
  },

  // =========================================================================
  // BAGIAN VI: URAIAN / ESSAY TERBUKA (5 BUTIR SOAL: NO. 31 - 35)
  // Setiap butir bernilai skor maksimal 2 (Total skor Uraian = 10)
  // =========================================================================
  {
    id: 31,
    type: 'uraian',
    topic: 'The Animal Kingdom - Five Vertebrate Classes',
    difficulty: 'Sedang',
    text: 'Name the five (5) major vertebrate classes in the Animal Kingdom, and provide at least one (1) animal example for each class!',
    maxScore: 2,
    keyPoints: [
      '1. Mammals (contoh: lion, cat, elephant, bat, dolphin, whale, human)',
      '2. Birds / Aves (contoh: eagle, penguin, owl, sparrow, parrot, peacock)',
      '3. Reptiles (contoh: snake, crocodile, turtle, lizard, Komodo dragon)',
      '4. Amphibians (contoh: frog, toad, salamander, newt)',
      '5. Fish / Pisces (contoh: clownfish, shark, salmon, goldfish, tuna)',
    ],
    rubric:
      'Skor 2: Menyebutkan kelima (5) kelas vertebrata (Mammals, Birds, Reptiles, Amphibians, Fish) beserta masing-masing contoh hewan yang tepat dan lengkap.\nSkor 1: Menyebutkan 3 - 4 kelas vertebrata beserta contohnya dengan benar.\nSkor 0: Hanya menyebutkan 1 - 2 kelas, atau jawaban tidak relevan.',
    explanation:
      'The 5 major vertebrate groups are: (1) Mammals (e.g. Lion/Dolphin), (2) Birds (e.g. Eagle/Penguin), (3) Reptiles (e.g. Snake/Crocodile), (4) Amphibians (e.g. Frog/Salamander), and (5) Fish (e.g. Shark/Goldfish).',
  },
  {
    id: 32,
    type: 'uraian',
    topic: 'The Animal Kingdom - Mammals vs Reptiles',
    difficulty: 'Sedang',
    text: 'Explain two (2) main differences between Mammals and Reptiles regarding:\n(a) Body covering (penutup tubuh), and\n(b) How they reproduce and care for their offspring (reproduksi dan menyusui)!',
    maxScore: 2,
    keyPoints: [
      '(a) Body covering: Mammals have hair or fur, whereas Reptiles have dry, waterproof scales or scutes.',
      '(b) Reproduction: Most mammals give birth to live babies (viviparous) and mothers produce milk to nurse their young; whereas Reptiles lay eggs with leathery shells on land (oviparous) and do not produce milk.',
      'Bonus/Alternative: Mammals are warm-blooded (endothermic), while reptiles are cold-blooded (ectothermic).',
    ],
    rubric:
      'Skor 2: Mampu menjelaskan kedua perbedaan (penutup tubuh: hair/fur vs dry scales; dan cara reproduksi/menyusui: melahirkan & menyusui vs bertelur) secara jelas dan tepat.\nSkor 1: Hanya menjelaskan salah satu aspek perbedaan dengan benar.\nSkor 0: Penjelasan keliru atau tidak menjawab pertanyaan.',
    explanation:
      'Mammals have hair/fur, give birth to live young, and feed them with milk. In contrast, reptiles are covered in dry scaly skin, lay eggs on land, and do not nurse their young.',
  },
  {
    id: 33,
    type: 'uraian',
    topic: 'Mengenal Past Tense - Regular vs Irregular Verbs',
    difficulty: 'Sedang',
    text: 'Explain the difference between Regular Verbs and Irregular Verbs in the Simple Past Tense! Provide two (2) examples of regular past verbs and two (2) examples of irregular past verbs.',
    maxScore: 2,
    keyPoints: [
      'Perbedaan: Regular verbs membentuk past tense (Verb 2) dengan menambahkan akhiran -ed atau -d pada kata kerja dasar. Sedangkan Irregular verbs mengalami perubahan bentuk ejaan khusus atau tidak beraturan (tidak berakhiran -ed biasa).',
      'Contoh Regular Verbs: visited, played, watched, cleaned, climbed, walked.',
      'Contoh Irregular Verbs: went (go), saw (see), ate (eat), swam (swim), flew (fly), bought (buy).',
    ],
    rubric:
      'Skor 2: Menjelaskan perbedaan pembentukan kata kerja beraturan (-ed/-d) dan tak beraturan secara tepat, serta menuliskan masing-masing 2 contoh yang benar.\nSkor 1: Penjelasan perbedaan benar tetapi contoh kurang lengkap/keliru, atau hanya menulis contoh tanpa penjelasan.\nSkor 0: Penjelasan dan contoh keliru.',
    explanation:
      'Regular verbs form their past tense by adding -ed or -d (e.g. visited, climbed). Irregular verbs change their spelling irregularly without following the -ed rule (e.g. go ➔ went, see ➔ saw).',
  },
  {
    id: 34,
    type: 'uraian',
    topic: 'The Animal Kingdom - Amphibian Metamorphosis',
    difficulty: 'Sukar',
    text: 'Why is a frog classified as an amphibian? Describe the metamorphosis stages of a frog and how its breathing organ changes from tadpole to adult frog!',
    maxScore: 2,
    keyPoints: [
      'Arti amfibi: Berasal dari bahasa Yunani "amphi" (dua) dan "bios" (kehidupan), artinya dapat hidup di dua alam (air dan darat).',
      'Tahapan metamorfosis: Telur (eggs in water) ➔ Kecebong/berudu (tadpoles with tail) ➔ Katak muda (froglet with small legs) ➔ Katak dewasa (adult frog).',
      'Perubahan organ pernapasan: Saat menetas di air menjadi kecebong bernapas dengan insang (gills); setelah bermetamorfosis menjadi katak dewasa berkembang paru-paru (lungs) dan dapat menyerap oksigen melalui kulitnya yang lembap (moist skin).',
    ],
    rubric:
      'Skor 2: Menguraikan alasan amfibi (hidup di air dan darat), tahapan metamorfosis katak, serta perubahan organ pernapasannya (insang ➔ paru-paru & kulit lembap) secara runtut dan tepat.\nSkor 1: Menjelaskan tahapan metamorfosis atau perubahan organ pernapasan saja secara umum.\nSkor 0: Penjelasan keliru atau tidak menjawab.',
    explanation:
      'Frogs are amphibians because they undergo metamorphosis and live in both water and land. As aquatic tadpoles, they breathe with gills; as terrestrial adults, they breathe with lungs and their moist skin.',
  },
  {
    id: 35,
    type: 'uraian',
    topic: 'Integrated Narrative - Zoo Visit in Simple Past Tense',
    difficulty: 'Sukar',
    text: 'Write a short paragraph (3 to 4 sentences) in Simple Past Tense about a memorable visit to a zoo or animal park. Your paragraph must include:\n1. A past time marker (e.g., yesterday, last weekend, last holiday),\n2. At least two (2) past verbs in Verb 2 form (e.g., visited, saw, took, fed, watched),\n3. Mention at least two (2) animals and their Animal Kingdom groups (mammal, bird, reptile, amphibian, or fish)!',
    maxScore: 2,
    keyPoints: [
      'Memuat keterangan waktu lampau (contoh: "Last Sunday", "Yesterday", "Last month").',
      'Menggunakan minimal 2 kata kerja lampau / Verb 2 (contoh: "visited", "saw", "fed", "swam", "watched", "took").',
      'Menyebutkan minimal 2 hewan beserta kelompok Animal Kingdom-nya (contoh: "I saw an eagle, which is a majestic bird, and a crocodile, a dangerous reptile").',
      'Struktur tata bahasa (grammar) kalimat Simple Past Tense benar dan bermakna padu.',
    ],
    rubric:
      'Skor 2: Memenuhi ketiga kriteria penulisan paragraf (past time signal, minimal 2 past verbs, dan 2 hewan beserta kelompoknya) dengan tata bahasa Simple Past Tense yang baik dan koheren.\nSkor 1: Memenuhi 1 atau 2 kriteria, atau terdapat beberapa kesalahan tata bahasa past tense.\nSkor 0: Kalimat tidak menggunakan pola Simple Past Tense atau tidak relevan dengan topik.',
    explanation:
      'Contoh paragraf yang baik: "Last weekend, my family visited the wildlife park. We saw a Bengal tiger resting under a tree, which is a powerful mammal. Later, I watched a green snake, an interesting reptile, slither quietly in the vivarium."',
  },
];

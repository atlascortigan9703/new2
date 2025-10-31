// Heritage Sites Data
const heritageSites = [
    {
        id: 1,
        name: "Taj Mahal",
        description: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal. The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being 'the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage'.",
        shortDescription: "An ivory-white marble mausoleum in Agra, India, built by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        location: "Agra, India",
        region: "asia",
        religion: "islamic",
        coordinates: "27.1751° N, 78.0421° E"
    },
    {
        id: 2,
        name: "Great Wall of China",
        description: "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe. Several walls were being built as early as the 7th century BC; these were later joined together and made bigger and stronger, and are now collectively referred to as the Great Wall.",
        shortDescription: "A series of fortifications built across the historical northern borders of China to protect against invasions.",
        image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
        location: "Northern China",
        region: "asia",
        religion: "none",
        coordinates: "40.4319° N, 116.5704° E"
    },
    {
        id: 3,
        name: "Bodh Gaya",
        description: "Bodh Gaya is a religious site and place of pilgrimage associated with the Mahabodhi Temple Complex in Gaya district in the Indian state of Bihar. It is famous as it is the place where Gautama Buddha is said to have attained Enlightenment under what became known as the Bodhi Tree. Since antiquity, Bodh Gaya has remained the object of pilgrimage and veneration for both Hindus and Buddhists. In 2002, Mahabodhi Temple, located in Bodh Gaya, became a UNESCO World Heritage Site.",
        shortDescription: "The place where Gautama Buddha attained Enlightenment, featuring the sacred Bodhi Tree and Mahabodhi Temple.",
        image: "https://images.unsplash.com/photo-1591871937571-1c8b6be10cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        location: "Bihar, India",
        region: "asia",
        religion: "buddhist",
        coordinates: "24.6959° N, 84.9911° E"
    },
    {
        id: 4,
        name: "Christ the Redeemer",
        description: "Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida fashioned the face. The statue is 30 meters (98 ft) high, excluding its 8-meter (26 ft) pedestal. The arms stretch 28 meters (92 ft) wide. It is made of reinforced concrete and soapstone. The statue weighs 635 metric tons (625 long, 700 short tons), and is located at the peak of the 700-meter (2,300 ft) Corcovado mountain in the Tijuca Forest National Park overlooking the city of Rio de Janeiro.",
        shortDescription: "An iconic Art Deco statue of Jesus Christ overlooking Rio de Janeiro from the Corcovado mountain.",
        image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
        location: "Rio de Janeiro, Brazil",
        region: "americas",
        religion: "christian",
        coordinates: "22.9519° S, 43.2105° W"
    },
    {
        id: 5,
        name: "Machu Picchu",
        description: "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain ridge. It is located in the Machupicchu District within Urubamba Province above the Sacred Valley, which is 80 kilometers (50 mi) northwest of Cusco. The Urubamba River flows past it, cutting through the Cordillera and creating a canyon with a tropical mountain climate. Most archaeologists believe that Machu Picchu was constructed as an estate for the Inca emperor Pachacuti (1438–1472). Often referred to as the 'Lost City of the Incas', it is the most familiar icon of Inca civilization.",
        shortDescription: "A 15th-century Inca citadel located high in the Andes mountains of Peru, known as the 'Lost City of the Incas'.",
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
        location: "Cusco Region, Peru",
        region: "americas",
        religion: "none",
        coordinates: "13.1631° S, 72.5450° W"
    },
    {
        id: 6,
        name: "Colosseum",
        description: "The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age. Construction began under the emperor Vespasian in AD 72 and was completed in AD 80 under his successor and heir, Titus. Further modifications were made during the reign of Domitian. The three emperors that were patrons of the work are known as the Flavian dynasty, and the amphitheatre was named the Flavian Amphitheatre by later classicists and archaeologists for its association with their family name.",
        shortDescription: "An ancient oval amphitheatre in Rome, Italy, and the largest ever built in the Roman Empire.",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2092&q=80",
        location: "Rome, Italy",
        region: "europe",
        religion: "none",
        coordinates: "41.8902° N, 12.4922° E"
    },
    {
        id: 7,
        name: "Petra",
        description: "Petra is a historic and archaeological city in southern Jordan. It is adjacent to the mountain of Jabal Al-Madbah, in a basin surrounded by mountains forming the eastern flank of the Arabah valley running from the Dead Sea to the Gulf of Aqaba. The area around Petra has been inhabited from as early as 7000 BC, and the Nabataeans might have settled in what would become the capital city of their kingdom as early as the 4th century BC. Archaeological work has only discovered evidence of Nabataean presence dating back to the second century BC, by which time Petra had become their capital.",
        shortDescription: "A historical and archaeological city in southern Jordan, famous for its rock-cut architecture.",
        image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
        location: "Ma'an Governorate, Jordan",
        region: "asia",
        religion: "none",
        coordinates: "30.3285° N, 35.4444° E"
    },
    {
        id: 8,
        name: "Angkor Wat",
        description: "Angkor Wat is a temple complex in Cambodia and is the largest religious monument in the world, on a site measuring 162.6 hectares. Originally constructed as a Hindu temple dedicated to the god Vishnu for the Khmer Empire, it was gradually transformed into a Buddhist temple towards the end of the 12th century. It was built by the Khmer King Suryavarman II in the early 12th century in Yaśodharapura, the capital of the Khmer Empire, as his state temple and eventual mausoleum. Breaking from the Shaiva tradition of previous kings, Angkor Wat was instead dedicated to Vishnu.",
        shortDescription: "The largest religious monument in the world, originally a Hindu temple later transformed into a Buddhist temple.",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        location: "Siem Reap, Cambodia",
        region: "asia",
        religion: "hindu",
        coordinates: "13.4125° N, 103.8670° E"
    }
];

// DOM Elements
const sitesContainer = document.getElementById('sitesContainer');
const districtFilter = document.getElementById('districtFilter');
const religionFilter = document.getElementById('religionFilter');
const voiceToggle = document.getElementById('voiceToggle');
const modal = document.getElementById('siteModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close');

// Voice Narration
let isVoiceEnabled = false;
let currentSpeech = null;
let currentPlayingButton = null;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    displaySites(heritageSites);
    setupEventListeners();
});

// Display heritage sites
function displaySites(sites) {
    sitesContainer.innerHTML = '';
    
    if (sites.length === 0) {
        sitesContainer.innerHTML = '<p class="no-results">No heritage sites match your filters. Please try different criteria.</p>';
        return;
    }
    
    sites.forEach(site => {
        const siteCard = document.createElement('div');
        siteCard.className = 'site-card';
        siteCard.innerHTML = `
            <div class="site-image">
                <img src="${site.image}" alt="${site.name}">
            </div>
            <div class="site-info">
                <h3>${site.name}</h3>
                <p>${site.shortDescription}</p>
                <div class="site-tags">
                    <span class="tag">${site.region.charAt(0).toUpperCase() + site.region.slice(1)}</span>
                    <span class="tag">${site.religion.charAt(0).toUpperCase() + site.religion.slice(1)}</span>
                </div>
                <button class="voice-play-btn" data-site-id="${site.id}">
                    <i class="fas fa-play"></i>
                    <span>Listen to Description</span>
                </button>
            </div>
        `;
        
        siteCard.addEventListener('click', (e) => {
            // Don't open modal if voice button is clicked
            if (!e.target.closest('.voice-play-btn')) {
                openModal(site);
            }
        });
        
        sitesContainer.appendChild(siteCard);
    });
    
    // Add event listeners to voice buttons
    document.querySelectorAll('.voice-play-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const siteId = parseInt(this.getAttribute('data-site-id'));
            const site = heritageSites.find(s => s.id === siteId);
            if (site) {
                playSiteDescription(site, this);
            }
        });
    });
}

// Setup event listeners
function setupEventListeners() {
    // Filter event listeners
    districtFilter.addEventListener('change', filterSites);
    religionFilter.addEventListener('change', filterSites);
    
    // Voice toggle
    voiceToggle.addEventListener('click', toggleVoiceNarration);
    
    // Modal close
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        stopSpeech();
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            stopSpeech();
        }
    });
}

// Filter sites based on selected criteria
function filterSites() {
    const regionValue = districtFilter.value;
    const religionValue = religionFilter.value;
    
    let filteredSites = heritageSites;
    
    if (regionValue !== 'all') {
        filteredSites = filteredSites.filter(site => site.region === regionValue);
    }
    
    if (religionValue !== 'all') {
        filteredSites = filteredSites.filter(site => site.religion === religionValue);
    }
    
    displaySites(filteredSites);
}

// Open modal with site details
function openModal(site) {
    modalBody.innerHTML = `
        <div class="modal-body">
            <div class="modal-image">
                <img src="${site.image}" alt="${site.name}">
            </div>
            <div class="modal-details">
                <h2>${site.name}</h2>
                <div class="modal-tags">
                    <span class="tag">${site.region.charAt(0).toUpperCase() + site.region.slice(1)}</span>
                    <span class="tag">${site.religion.charAt(0).toUpperCase() + site.religion.slice(1)}</span>
                </div>
                <p>${site.description}</p>
                <div class="location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${site.location} (${site.coordinates})</span>
                </div>
                <button class="modal-voice-btn" id="modalVoiceBtn">
                    <i class="fas fa-play"></i>
                    <span>Listen to Full Description</span>
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // Add event listener to modal voice button
    document.getElementById('modalVoiceBtn').addEventListener('click', function() {
        playSiteDescription(site, this);
    });
    
    // Start voice narration if enabled
    if (isVoiceEnabled) {
        playSiteDescription(site, document.getElementById('modalVoiceBtn'));
    }
}

// Play site description using Web Speech API
function playSiteDescription(site, buttonElement) {
    // Stop any current speech
    stopSpeech();
    
    // Reset previous playing button
    if (currentPlayingButton) {
        currentPlayingButton.innerHTML = '<i class="fas fa-play"></i><span>Listen to Description</span>';
        currentPlayingButton.classList.remove('playing');
    }
    
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance();
        
        // Use short description for card buttons, full description for modal
        const textToSpeak = buttonElement.classList.contains('modal-voice-btn') 
            ? `${site.name}. ${site.description}`
            : `${site.name}. ${site.shortDescription}`;
            
        speech.text = textToSpeak;
        speech.rate = 0.9;
        speech.pitch = 1;
        speech.volume = 1;
        
        // Update button to show playing state
        buttonElement.innerHTML = '<i class="fas fa-stop"></i><span>Stop Listening</span>';
        buttonElement.classList.add('playing');
        currentPlayingButton = buttonElement;
        
        // Handle when speech ends
        speech.onend = function() {
            if (currentPlayingButton) {
                currentPlayingButton.innerHTML = '<i class="fas fa-play"></i><span>Listen to Description</span>';
                currentPlayingButton.classList.remove('playing');
                currentPlayingButton = null;
            }
        };
        
        window.speechSynthesis.speak(speech);
        currentSpeech = speech;
    } else {
        alert('Your browser does not support voice narration. Please try Chrome, Edge, or Safari.');
    }
}

// Toggle voice narration
function toggleVoiceNarration() {
    isVoiceEnabled = !isVoiceEnabled;
    
    if (isVoiceEnabled) {
        voiceToggle.innerHTML = '<i class="fas fa-volume-mute"></i><span>Disable Voice</span>';
        voiceToggle.style.backgroundColor = '#e74c3c';
    } else {
        voiceToggle.innerHTML = '<i class="fas fa-volume-up"></i><span>Enable Voice</span>';
        voiceToggle.style.backgroundColor = '#3498db';
        stopSpeech();
    }
}

// Stop current speech
function stopSpeech() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    
    if (currentPlayingButton) {
        currentPlayingButton.innerHTML = '<i class="fas fa-play"></i><span>Listen to Description</span>';
        currentPlayingButton.classList.remove('playing');
        currentPlayingButton = null;
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
       
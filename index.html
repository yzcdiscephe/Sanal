<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Kentsel Dönüşüm AI Danışmanı</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            background: '#0a1628',
            foreground: '#e2e8f0',
            card: '#1e293b',
            'card-foreground': '#e2e8f0',
            primary: '#3b82f6',
            'primary-foreground': '#ffffff',
            secondary: '#22c55e',
            'secondary-foreground': '#ffffff',
            muted: '#334155',
            'muted-foreground': '#94a3b8',
            accent: '#1e40af',
            'accent-foreground': '#ffffff',
            border: '#334155',
            input: '#334155',
            ring: '#3b82f6',
          }
        }
      }
    }
  </script>
  <style>
    body {
      background-color: #0a1628;
      color: #e2e8f0;
      font-family: system-ui, -apple-system, sans-serif;
    }
    .message-loading span {
      animation: bounce 1s infinite;
    }
    .message-loading span:nth-child(2) { animation-delay: 0.15s; }
    .message-loading span:nth-child(3) { animation-delay: 0.3s; }
    @keyframes bounce {
      0%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-8px); }
    }
  </style>
</head>
<body class="min-h-screen flex flex-col">
  
  <!-- Header -->
  <header class="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-sm">
    <div class="container mx-auto flex items-center justify-between px-4 py-3">
      <div class="flex items-center gap-2">
        <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
          </svg>
        </div>
        <div>
          <h1 class="text-lg font-semibold text-foreground">Kentsel Dönüşüm AI</h1>
          <p class="text-xs text-muted-foreground">Akıllı Danışman</p>
        </div>
      </div>
      <button id="soundToggle" class="p-2 rounded-full bg-card border border-border hover:bg-accent transition-colors">
        <svg id="soundOn" class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5.586v12.828a1 1 0 01-1.707.707L5.586 15z"/>
        </svg>
        <svg id="soundOff" class="h-5 w-5 text-muted-foreground hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5.586v12.828a1 1 0 01-1.707.707L5.586 15z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/>
        </svg>
      </button>
    </div>
  </header>

  <!-- Quick Actions -->
  <div class="border-b border-border bg-card px-4 py-4">
    <p class="mb-3 text-center text-sm text-muted-foreground">Hızlı sorular</p>
    <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
      <button onclick="sendMessage('Binam riskli mi?')" class="flex h-auto flex-col items-center gap-1 p-3 rounded-lg border border-border hover:bg-accent transition-colors">
        <svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
        <span class="text-xs font-medium">Riskli Bina</span>
      </button>
      <button onclick="sendMessage('Nasıl başvururum?')" class="flex h-auto flex-col items-center gap-1 p-3 rounded-lg border border-border hover:bg-accent transition-colors">
        <svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
        <span class="text-xs font-medium">Başvuru</span>
      </button>
      <button onclick="sendMessage('Yasal haklarım neler?')" class="flex h-auto flex-col items-center gap-1 p-3 rounded-lg border border-border hover:bg-accent transition-colors">
        <svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
        </svg>
        <span class="text-xs font-medium">Haklarım</span>
      </button>
      <button onclick="sendMessage('Süreç nasıl işler?')" class="flex h-auto flex-col items-center gap-1 p-3 rounded-lg border border-border hover:bg-accent transition-colors">
        <svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span class="text-xs font-medium">Süreç</span>
      </button>
    </div>
  </div>

  <!-- Chat Area -->
  <div id="chatArea" class="flex-1 overflow-y-auto px-4 py-4">
    <!-- Welcome Message -->
    <div id="welcomeMessage" class="flex flex-col items-center justify-center py-8">
      <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
        <svg class="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      </div>
      <h2 class="mb-2 text-center text-xl font-semibold text-foreground">Kentsel Dönüşüm AI Danışmanı</h2>
      <p class="mb-6 max-w-md text-center text-sm text-muted-foreground">
        Kentsel dönüşüm sürecinizde size yardımcı olmak için buradayım. Riskli bina tespiti, yasal süreçler ve haklarınız hakkında sorularınızı yanıtlayabilirim.
      </p>
    </div>
    
    <!-- Messages Container -->
    <div id="messagesContainer" class="space-y-4"></div>
  </div>

  <!-- Chat Input -->
  <div class="sticky bottom-0 border-t border-border bg-card p-4">
    <form id="chatForm" class="flex items-center gap-2">
      <button type="button" id="micButton" class="h-12 w-12 shrink-0 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors">
        <svg id="micIcon" class="h-5 w-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
        </svg>
        <svg id="micOffIcon" class="h-5 w-5 text-red-500 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5.586v12.828a1 1 0 01-1.707.707L5.586 15z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/>
        </svg>
      </button>
      <input
        type="text"
        id="chatInput"
        placeholder="Sorunuzu yazın veya mikrofona basın..."
        class="flex-1 rounded-full border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      >
      <button type="submit" class="h-12 w-12 shrink-0 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
        <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
        </svg>
      </button>
    </form>
    <p id="inputHint" class="mt-2 text-center text-xs text-muted-foreground">
      Mikrofona basıp Türkçe konuşabilirsiniz
    </p>
  </div>

  <script>
    // Global State
    let isSoundEnabled = true;
    let isListening = false;
    let recognition = null;

    // Kentsel Dönüşüm Bilgi Bankası
    const knowledgeBase = {
      "riskli": "Binanızın riskli olup olmadığını öğrenmek için lisanslı bir yapı denetim kuruluşuna başvurmanız gerekmektedir. Riskli yapı tespiti için gerekli belgeler: tapu fotokopisi, kimlik fotokopisi ve başvuru dilekçesidir. Tespit ücreti binanın büyüklüğüne göre değişmektedir. 6306 sayılı Kanun kapsamında riskli yapı olarak tespit edilen binalara devlet desteği sağlanmaktadır.",
      "başvuru": "Kentsel dönüşüm başvurusu için şu adımları izlemelisiniz:\n\n1. Lisanslı yapı denetim kuruluşuna riskli yapı tespiti yaptırın\n2. Tespit raporunu ilgili belediyeye sunun\n3. Kat maliklerinin 2/3 çoğunluğu ile karar alın\n4. Çevre ve Şehircilik İl Müdürlüğüne başvurun\n5. Yıkım ve yeniden yapım sürecini başlatın\n\nBaşvuru tamamen ücretsizdir ve devlet kira yardımı sağlamaktadır.",
      "haklar": "Kentsel dönüşümde haklarınız:\n\n• Kira yardımı: Aylık 2.500-5.000 TL arası (bölgeye göre değişir)\n• Taşınma yardımı: Bir defaya mahsus ödeme\n• Faiz desteği: Kredi faizlerinde %4'e varan indirim\n• Vergi muafiyeti: Harç ve vergilerden muafiyet\n• Hak sahipliği: Mevcut dairenizin karşılığı yeni daire hakkı\n\nHak kaybı yaşamamak için sözleşmeleri dikkatlice okuyun.",
      "süreç": "Kentsel dönüşüm süreci şu şekilde işler:\n\n1. Riskli yapı tespiti (15-30 gün)\n2. Tapu'ya şerh konulması (7 gün)\n3. Kat malikleri toplantısı ve karar (30 gün)\n4. Yıkım kararı ve tahliye (60-90 gün)\n5. Yeni proje onayı (60 gün)\n6. İnşaat süreci (18-24 ay)\n7. Yeni dairelerin teslimi\n\nToplam süreç ortalama 2-3 yıl sürmektedir.",
      "kira": "Kentsel dönüşüm kira yardımı hakkında bilgi:\n\n• Aylık kira yardımı: 2.500-5.000 TL (il ve ilçeye göre değişir)\n• Süre: Maksimum 48 ay (4 yıl)\n• Başvuru: Çevre ve Şehircilik İl Müdürlüğü\n• Gerekli belgeler: Tapu, kimlik, kira kontratı\n\nKira yardımı ödemeleri aylık olarak hesabınıza yatırılır.",
      "deprem": "Deprem güvenliği değerlendirmesi için:\n\n• Binanın yapım yılı önemlidir (1999 öncesi binalar risk grubunda)\n• Betonarme yapılar kontrol edilmelidir\n• Zemin etüdü yapılmalıdır\n• Taşıyıcı sistem incelenmelidir\n\nÜcretsiz deprem risk sorgulaması için e-Devlet üzerinden 'Riskli Yapı Sorgulama' hizmetini kullanabilirsiniz.",
      "default": "Kentsel Dönüşüm AI Danışmanı olarak size yardımcı olmak için buradayım. Şu konularda detaylı bilgi verebilirim:\n\n• Riskli bina tespiti\n• Başvuru süreçleri\n• Yasal haklar ve tazminatlar\n• Kira yardımı\n• Deprem güvenliği\n• İnşaat süreci\n\nLütfen sorunuzu daha detaylı sorun."
    };

    // Get AI Response
    function getAIResponse(message) {
      const lowerMessage = message.toLowerCase();
      
      if (lowerMessage.includes("riskli") || lowerMessage.includes("risk") || lowerMessage.includes("binam")) {
        return knowledgeBase.riskli;
      } else if (lowerMessage.includes("başvuru") || lowerMessage.includes("nasıl")) {
        return knowledgeBase.başvuru;
      } else if (lowerMessage.includes("hak") || lowerMessage.includes("yasal")) {
        return knowledgeBase.haklar;
      } else if (lowerMessage.includes("süreç") || lowerMessage.includes("işler") || lowerMessage.includes("adım")) {
        return knowledgeBase.süreç;
      } else if (lowerMessage.includes("kira") || lowerMessage.includes("yardım") || lowerMessage.includes("destek")) {
        return knowledgeBase.kira;
      } else if (lowerMessage.includes("deprem") || lowerMessage.includes("güvenlik")) {
        return knowledgeBase.deprem;
      }
      
      return knowledgeBase.default;
    }

    // Speak text using Text-to-Speech
    function speak(text) {
      if (!isSoundEnabled || !('speechSynthesis' in window)) return;
      
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'tr-TR';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }

    // Add message to chat
    function addMessage(content, isUser) {
      const welcomeMsg = document.getElementById('welcomeMessage');
      if (welcomeMsg) welcomeMsg.style.display = 'none';

      const container = document.getElementById('messagesContainer');
      const messageDiv = document.createElement('div');
      messageDiv.className = `flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`;
      
      const icon = isUser 
        ? '<svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>'
        : '<svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>';

      messageDiv.innerHTML = `
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${isUser ? 'bg-primary' : 'bg-secondary'}">
          ${icon}
        </div>
        <div class="max-w-[80%] rounded-2xl px-4 py-3 ${isUser ? 'rounded-tr-sm bg-primary text-white' : 'rounded-tl-sm bg-card border border-border'}">
          <p class="text-sm leading-relaxed whitespace-pre-wrap">${content}</p>
          ${!isUser ? `<button onclick="speak('${content.replace(/'/g, "\\'").replace(/\n/g, ' ')}')" class="mt-2 flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
            <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5.586v12.828a1 1 0 01-1.707.707L5.586 15z"/></svg>
            Sesli dinle
          </button>` : ''}
        </div>
      `;

      container.appendChild(messageDiv);
      container.scrollIntoView({ behavior: 'smooth', block: 'end' });

      if (!isUser && isSoundEnabled) {
        setTimeout(() => speak(content), 300);
      }
    }

    // Show loading indicator
    function showLoading() {
      const container = document.getElementById('messagesContainer');
      const loadingDiv = document.createElement('div');
      loadingDiv.id = 'loadingIndicator';
      loadingDiv.className = 'flex items-center gap-2 message-loading';
      loadingDiv.innerHTML = `
        <span class="h-2 w-2 rounded-full bg-primary"></span>
        <span class="h-2 w-2 rounded-full bg-primary"></span>
        <span class="h-2 w-2 rounded-full bg-primary"></span>
      `;
      container.appendChild(loadingDiv);
    }

    // Hide loading indicator
    function hideLoading() {
      const loading = document.getElementById('loadingIndicator');
      if (loading) loading.remove();
    }

    // Send message
    function sendMessage(message) {
      if (!message || !message.trim()) return;

      addMessage(message, true);
      document.getElementById('chatInput').value = '';
      
      showLoading();
      
      setTimeout(() => {
        hideLoading();
        const response = getAIResponse(message);
        addMessage(response, false);
      }, 1000);
    }

    // Form submit
    document.getElementById('chatForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const input = document.getElementById('chatInput');
      sendMessage(input.value);
    });

    // Sound toggle
    document.getElementById('soundToggle').addEventListener('click', function() {
      isSoundEnabled = !isSoundEnabled;
      document.getElementById('soundOn').classList.toggle('hidden', !isSoundEnabled);
      document.getElementById('soundOff').classList.toggle('hidden', isSoundEnabled);
      if (!isSoundEnabled) {
        window.speechSynthesis.cancel();
      }
    });

    // Speech Recognition
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition = new SpeechRecognition();
      recognition.lang = 'tr-TR';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        isListening = true;
        document.getElementById('micIcon').classList.add('hidden');
        document.getElementById('micOffIcon').classList.remove('hidden');
        document.getElementById('micButton').classList.add('bg-red-500/20');
        document.getElementById('inputHint').textContent = 'Dinliyorum...';
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById('chatInput').value = transcript;
      };

      recognition.onend = () => {
        isListening = false;
        document.getElementById('micIcon').classList.remove('hidden');
        document.getElementById('micOffIcon').classList.add('hidden');
        document.getElementById('micButton').classList.remove('bg-red-500/20');
        document.getElementById('inputHint').textContent = 'Mikrofona basıp Türkçe konuşabilirsiniz';
      };

      recognition.onerror = () => {
        isListening = false;
        document.getElementById('micIcon').classList.remove('hidden');
        document.getElementById('micOffIcon').classList.add('hidden');
        document.getElementById('micButton').classList.remove('bg-red-500/20');
      };

      document.getElementById('micButton').addEventListener('click', () => {
        if (!isListening) {
          recognition.start();
        }
      });
    } else {
      document.getElementById('micButton').style.display = 'none';
    }

    // Welcome greeting
    window.addEventListener('load', () => {
      setTimeout(() => {
        speak('Hoş geldiniz! Ben Kentsel Dönüşüm AI Danışmanıyım. Size nasıl yardımcı olabilirim?');
      }, 1000);
    });
  </script>
</body>
</html>


var character;

function transcrire() {
character = document.conversion.element.value;
character = character.replace(/[äâ]/g, "e");
character = character.replace(/[êëē]/g, "é");

character = character.replace(/[əǝ]/g, "");  
character = character.replace(/w/g, "ው");
character = character.replace(/ውe/g, "ወ");
character = character.replace(/ውu/g, "ዉ");
character = character.replace(/ውi/g, "ዊ");
character = character.replace(/ውa/g, "ዋ");
character = character.replace(/ውe/g, "ዌ");
character = character.replace(/ውé/g, "ዌ");
character = character.replace(/ውo/g, "ዎ");

character = character.replace(/h/g, "ህ");
character = character.replace(/ህe/g, "ሀ");
character = character.replace(/ህu/g, "ሁ");
character = character.replace(/ህi/g, "ሂ");
character = character.replace(/ህa/g, "ሃ");
character = character.replace(/ሀe/g, "ሄ");
character = character.replace(/ህé/g, "ሄ");
character = character.replace(/ህo/g, "ሆ");
character = character.replace(/ሃa/g, "ዏ");

character = character.replace(/[ḫẖxX]/g, "ኅ");  
character = character.replace(/ኅe/g, "ኀ");
character = character.replace(/ኅu/g, "ኁ");
character = character.replace(/ኅi/g, "ኂ");
character = character.replace(/ኅa/g, "ኃ");
character = character.replace(/ኀe/g, "ኄ");
character = character.replace(/ኅé/g, "ኄ");
character = character.replace(/ኅo/g, "ኆ");
character = character.replace(/ኃa/g, "ኋ");

character = character.replace(/[lL]/g, "ል");
character = character.replace(/ልe/g, "ለ");
character = character.replace(/ልu/g, "ሉ");
character = character.replace(/ልi/g, "ሊ");
character = character.replace(/ልa/g, "ላ");
character = character.replace(/ለe/g, "ሌ");
character = character.replace(/ልé/g, "ሌ");
character = character.replace(/ልo/g, "ሎ");
character = character.replace(/ላa/g, "ሏ");

character = character.replace(/ህህ/g, "ሕ");
character = character.replace(/[ḥH]/g, "ሕ");
character = character.replace(/ሕe/g, "ሐ");
character = character.replace(/ሕu/g, "ሑ");
character = character.replace(/ሕi/g, "ሒ");
character = character.replace(/ሕa/g, "ሓ");
character = character.replace(/ሐe/g, "ሔ");
character = character.replace(/ሕé/g, "ሔ");
character = character.replace(/ሕo/g, "ሖ");
character = character.replace(/ሓa/g, "ሗ");

character = character.replace(/[mM]/g, "ም");
character = character.replace(/ምe/g, "መ");
character = character.replace(/ምu/g, "ሙ");
character = character.replace(/ምi/g, "ሚ");
character = character.replace(/ምa/g, "ማ");
character = character.replace(/መe/g, "ሜ");
character = character.replace(/ምé/g, "ሜ");
character = character.replace(/ምo/g, "ሞ");
character = character.replace(/ማa/g, "ሟ");
character = character.replace(/ምY/g, "ፙ");
character = character.replace(/ፙa/g, "ፙ");

character = character.replace(/[rR]/g, "ር");
character = character.replace(/ርe/g, "ረ");
character = character.replace(/ርu/g, "ሩ");
character = character.replace(/ርi/g, "ሪ");
character = character.replace(/ርa/g, "ራ");
character = character.replace(/ረe/g, "ሬ");
character = character.replace(/ርé/g, "ሬ");
character = character.replace(/ርo/g, "ሮ");
character = character.replace(/ራa/g, "ሯ");
character = character.replace(/ርY/g, "ፘ");
character = character.replace(/ፘa/g, "ፘ");

character = character.replace(/s/g, "ስ");
character = character.replace(/ስe/g, "ሰ");
character = character.replace(/ስu/g, "ሱ");
character = character.replace(/ስi/g, "ሲ");
character = character.replace(/ስa/g, "ሳ");
character = character.replace(/ሰe/g, "ሴ");
character = character.replace(/ስé/g, "ሴ");
character = character.replace(/ስo/g, "ሶ");
character = character.replace(/ሳa/g, "ሷ");

character = character.replace(/z/g, "ዝ");
character = character.replace(/ዝe/g, "ዘ");
character = character.replace(/ዝu/g, "ዙ");
character = character.replace(/ዝi/g, "ዚ");
character = character.replace(/ዝa/g, "ዛ");
character = character.replace(/ዘe/g, "ዜ");
character = character.replace(/ዝé/g, "ዜ");
character = character.replace(/ዝo/g, "ዞ");
character = character.replace(/ዛa/g, "ዟ");

// modif ss remplacé par sz
character = character.replace(/ś/g, "ሥ");
character = character.replace(/ስዝ/g, "ሥ");
character = character.replace(/ሥe/g, "ሠ");
character = character.replace(/ሥu/g, "ሡ");
character = character.replace(/ሥi/g, "ሢ");
character = character.replace(/ሥa/g, "ሣ");
character = character.replace(/ሠe/g, "ሤ");
character = character.replace(/ሥé/g, "ሤ");
character = character.replace(/ሥo/g, "ሦ");
character = character.replace(/ሣa/g, "ሧ");

character = character.replace(/š/g, "ሽ");
character = character.replace(/ስስ/g, "ሽ");
character = character.replace(/ስህ/g, "ሽ");
character = character.replace(/ሽe/g, "ሸ");
character = character.replace(/ሽu/g, "ሹ");
character = character.replace(/ሽi/g, "ሺ");
character = character.replace(/ሽa/g, "ሻ");
character = character.replace(/ሸe/g, "ሼ");
character = character.replace(/ሽé/g, "ሼ");
character = character.replace(/ሽo/g, "ሾ");
character = character.replace(/ሻa/g, "ሿ");


character = character.replace(/q/g, "ቅ");
character = character.replace(/ቅe/g, "ቀ");
character = character.replace(/ቅu/g, "ቁ");
character = character.replace(/ቅi/g, "ቂ");
character = character.replace(/ቅa/g, "ቃ");
character = character.replace(/ቀe/g, "ቄ");
character = character.replace(/ቅé/g, "ቄ");
character = character.replace(/ቅo/g, "ቆ");
character = character.replace(/ቃa/g, "ቋ");


character = character.replace(/ቅው/g, "ቍ");
character = character.replace(/ቍe/g, "ቈ");
character = character.replace(/ቍi/g, "ቊ");
character = character.replace(/ቍa/g, "ቋ");
character = character.replace(/ቈe/g, "ቌ");
character = character.replace(/ቍé/g, "ቌ");

//qh
character = character.replace(/ቅህ/g, "ቕ");
character = character.replace(/ቕe/g, "ቐ");
character = character.replace(/ቕu/g, "ቑ");
character = character.replace(/ቕi/g, "ቒ");
character = character.replace(/ቕa/g, "ቓ");
character = character.replace(/ቐe/g, "ቔ");
character = character.replace(/ቕé/g, "ቔ");
character = character.replace(/ቕo/g, "ቖ");


character = character.replace(/ቕው/g, "ቝ");
character = character.replace(/ቍe/g, "ቘ");
character = character.replace(/ቍi/g, "ቚ");
character = character.replace(/ቍa/g, "ቛ");
character = character.replace(/ቘe/g, "ቜ");
character = character.replace(/ቍé/g, "ቜ");
// xw
character = character.replace(/ኅው/g, "ኍ");
character = character.replace(/ኍe/g, "ቘ");
character = character.replace(/ኍi/g, "ቚ");
character = character.replace(/ኍa/g, "ቛ");
character = character.replace(/ቘe/g, "ቜ");
character = character.replace(/ኍé/g, "ቜ");


character = character.replace(/[bB]/g, "ብ");
character = character.replace(/ብe/g, "በ");
character = character.replace(/ብu/g, "ቡ");
character = character.replace(/ብi/g, "ቢ");
character = character.replace(/ብa/g, "ባ");
character = character.replace(/በe/g, "ቤ");
character = character.replace(/ብé/g, "ቤ");
character = character.replace(/ብo/g, "ቦ");
character = character.replace(/ባa/g, "ቧ");

character = character.replace(/[vV]/g, "ቭ");
character = character.replace(/ቭe/g, "ቨ");
character = character.replace(/ቭu/g, "ቩ");
character = character.replace(/ቭi/g, "ቪ");
character = character.replace(/ቭa/g, "ቫ");
character = character.replace(/ቨe/g, "ቬ");
character = character.replace(/ቭé/g, "ቬ");
character = character.replace(/ቭo/g, "ቮ");
character = character.replace(/ቫa/g, "ቯ");

character = character.replace(/t/g, "ት");
character = character.replace(/ትe/g, "ተ");
character = character.replace(/ትu/g, "ቱ");
character = character.replace(/ትi/g, "ቲ");
character = character.replace(/ትa/g, "ታ");
character = character.replace(/ተe/g, "ቴ");
character = character.replace(/ትé/g, "ቴ");
character = character.replace(/ትo/g, "ቶ");
character = character.replace(/ታa/g, "ቷ");

character = character.replace(/[cč]/g, "ች");
character = character.replace(/ችe/g, "ቸ");
character = character.replace(/ችu/g, "ቹ");
character = character.replace(/ችi/g, "ቺ");
character = character.replace(/ችa/g, "ቻ");
character = character.replace(/ቸe/g, "ቼ");
character = character.replace(/ችé/g, "ቼ");
character = character.replace(/ችo/g, "ቾ");
character = character.replace(/ቻa/g, "ቿ");

character = character.replace(/n/g, "ን");
character = character.replace(/ንe/g, "ነ");
character = character.replace(/ንu/g, "ኑ");
character = character.replace(/ንi/g, "ኒ");
character = character.replace(/ንa/g, "ና");
character = character.replace(/ነe/g, "ኔ");
character = character.replace(/ንé/g, "ኔ");
character = character.replace(/ንo/g, "ኖ");
character = character.replace(/ናa/g, "ኗ");

character = character.replace(/N/g, "ኝ");
character = character.replace(/ñ/g, "ኝ");
character = character.replace(/ንy/g, "ኝ");
character = character.replace(/ኝe/g, "ኘ");
character = character.replace(/ኝu/g, "ኙ");
character = character.replace(/ኝi/g, "ኚ");
character = character.replace(/ኝa/g, "ኛ");
character = character.replace(/ኝe/g, "ኜ");
character = character.replace(/ኝé/g, "ኜ");
character = character.replace(/ኝo/g, "ኞ");
character = character.replace(/ኛa/g, "ኟ");


character = character.replace(/k/g, "ክ");
character = character.replace(/ክe/g, "ከ");
character = character.replace(/ክu/g, "ኩ");
character = character.replace(/ክi/g, "ኪ");
character = character.replace(/ክa/g, "ካ");
character = character.replace(/ከe/g, "ኬ");
character = character.replace(/ክé/g, "ኬ");
character = character.replace(/ክo/g, "ኮ");
character = character.replace(/ካa/g, "ኳ");


character = character.replace(/ክኅ/g, "ኽ");
character = character.replace(/ኽe/g, "ኸ");
character = character.replace(/ኽu/g, "ኹ");
character = character.replace(/ኽi/g, "ኺ");
character = character.replace(/ኽa/g, "ኻ");
character = character.replace(/ኸe/g, "ኼ");
character = character.replace(/ኽé/g, "ኼ");
character = character.replace(/ኽo/g, "ኾ");

character = character.replace(/ኽው/g, "ዅ");
character = character.replace(/ዅe/g, "ዀ");
character = character.replace(/ዅu/g, "ዂ");
character = character.replace(/ዅi/g, "ዂ");
character = character.replace(/ዅa/g, "ዃ");
character = character.replace(/ዀe/g, "ዄ");
character = character.replace(/ዅé/g, "ዄ");


// kw
character = character.replace(/ክው/g, "ኵ");
character = character.replace(/ኵe/g, "ኰ");
character = character.replace(/ኵi/g, "ኲ");
character = character.replace(/ኵa/g, "ኳ");
character = character.replace(/ኰe/g, "ኴ");
character = character.replace(/ኵé/g, "ኴ");

character = character.replace(/K/g, "ኽ");
character = character.replace(/ክኅ/g, "ኽ");
character = character.replace(/ኽe/g, "ኸ");
character = character.replace(/ኽu/g, "ኹ");
character = character.replace(/ኽi/g, "ኺ");
character = character.replace(/ኽa/g, "ኻ");
character = character.replace(/ኽe/g, "ኼ");
character = character.replace(/ኽé/g, "ኼ");
character = character.replace(/ኽo/g, "ኾ");
character = character.replace(/ኽW/g, "ዃ");
character = character.replace(/ዃe/g, "ዀ");
character = character.replace(/ዃu/g, "ዅ");
character = character.replace(/ዃi/g, "ዂ");
character = character.replace(/ዃa/g, "ዃ");
character = character.replace(/ዀe/g, "ዄ");
character = character.replace(/ዃé/g, "ዄ");
character = character.replace(/ዃ'/g, "ዅ");

character = character.replace(/[Zž]/g, "ዥ");
character = character.replace(/ዝህ/g, "ዥ");
character = character.replace(/ዥe/g, "ዠ");
character = character.replace(/ዥu/g, "ዡ");
character = character.replace(/ዥi/g, "ዢ");
character = character.replace(/ዥa/g, "ዣ");
character = character.replace(/ዠe/g, "ዤ");
character = character.replace(/ዥé/g, "ዤ");
character = character.replace(/ዥo/g, "ዦ");
character = character.replace(/ዣa/g, "ዧ");

character = character.replace(/[yY]/g, "ይ");
character = character.replace(/ይe/g, "የ");
character = character.replace(/ይu/g, "ዩ");
character = character.replace(/ይi/g, "ዪ");
character = character.replace(/ይa/g, "ያ");
character = character.replace(/የe/g, "ዬ");
character = character.replace(/ይé/g, "ዬ");
character = character.replace(/ይo/g, "ዮ");
character = character.replace(/ያa/g, "ዯ");

character = character.replace(/d/g, "ድ");
character = character.replace(/ድe/g, "ደ");
character = character.replace(/ድu/g, "ዱ");
character = character.replace(/ድi/g, "ዲ");
character = character.replace(/ድa/g, "ዳ");
character = character.replace(/ደe/g, "ዴ");
character = character.replace(/ድé/g, "ዴ");
character = character.replace(/ድo/g, "ዶ");
character = character.replace(/ዳa/g, "ዷ");

character = character.replace(/ድድ/g, "ዽ");
character = character.replace(/[Dḍ]/g, "ዽ");
character = character.replace(/ዽe/g, "ዸ");
character = character.replace(/ዽu/g, "ዹ");
character = character.replace(/ዽi/g, "ዺ");
character = character.replace(/ዽa/g, "ዻ");
character = character.replace(/ዸe/g, "ዼ");
character = character.replace(/ዽé/g, "ዼ");
character = character.replace(/ዽo/g, "ዾ");
character = character.replace(/ዻa/g, "ዿ");

character = character.replace(/[jJ]/g, "ጅ");
character = character.replace(/ጅe/g, "ጀ");
character = character.replace(/ጅu/g, "ጁ");
character = character.replace(/ጅi/g, "ጂ");
character = character.replace(/ጅa/g, "ጃ");
character = character.replace(/ጀe/g, "ጄ");
character = character.replace(/ጅé/g, "ጄ");
character = character.replace(/ጅo/g, "ጆ");
character = character.replace(/ጃa/g, "ጇ");

character = character.replace(/g/g, "ግ");
character = character.replace(/ግe/g, "ገ");
character = character.replace(/ግu/g, "ጉ");
character = character.replace(/ግi/g, "ጊ");
character = character.replace(/ግa/g, "ጋ");
character = character.replace(/ገe/g, "ጌ");
character = character.replace(/ግé/g, "ጌ");
character = character.replace(/ግo/g, "ጎ");
character = character.replace(/ጋa/g, "ጓ");

// gw
character = character.replace(/ግው/g, "ጕ");
character = character.replace(/ጕe/g, "ጐ");
character = character.replace(/ጕi/g, "ጒ");
character = character.replace(/ጕa/g, "ጓ");
character = character.replace(/ጐe/g, "ጔ");
character = character.replace(/ጕé/g, "ጔ");


character = character.replace(/ግግ/g, "ጝ");
character = character.replace(/[ǧG]/g, "ጝ");
character = character.replace(/ጝe/g, "ጘ");
character = character.replace(/ጝu/g, "ጙ");
character = character.replace(/ጝi/g, "ጚ");
character = character.replace(/ጝa/g, "ጛ");
character = character.replace(/ጘe/g, "ጜ");
character = character.replace(/ጝé/g, "ጜ");
character = character.replace(/ጝo/g, "ጞ");
character = character.replace(/ጛa/g, "ጟ");

character = character.replace(/[Tṭ]/g, "ጥ");
character = character.replace(/ትህ/g, "ጥ");
character = character.replace(/ጥe/g, "ጠ");
character = character.replace(/ጥu/g, "ጡ");
character = character.replace(/ጥi/g, "ጢ");
character = character.replace(/ጥa/g, "ጣ");
character = character.replace(/ጠe/g, "ጤ");
character = character.replace(/ጥé/g, "ጤ");
character = character.replace(/ጥo/g, "ጦ");
character = character.replace(/ጣa/g, "ጧ");

character = character.replace(/[Cċ]/g, "ጭ");
character = character.replace(/ችህ/g, "ጭ");
character = character.replace(/ጭe/g, "ጨ");
character = character.replace(/ጭu/g, "ጩ");
character = character.replace(/ጭi/g, "ጪ");
character = character.replace(/ጭa/g, "ጫ");
character = character.replace(/ጨe/g, "ጬ");
character = character.replace(/ጭé/g, "ጬ");
character = character.replace(/ጭo/g, "ጮ");
character = character.replace(/ጫa/g, "ጯ");

character = character.replace(/p̣/g, "ጵ");
character = character.replace(/P/g, "ጵ");
character = character.replace(/ፕህ/g, "ጵ");
character = character.replace(/ጵe/g, "ጰ");
character = character.replace(/ጵu/g, "ጱ");
character = character.replace(/ጵi/g, "ጲ");
character = character.replace(/ጵa/g, "ጳ");
character = character.replace(/ጰe/g, "ጴ");
character = character.replace(/ጵé/g, "ጴ");
character = character.replace(/ጵo/g, "ጶ");
character = character.replace(/ጳa/g, "ጷ");

character = character.replace(/[Sṣ]/g, "ጽ");
character = character.replace(/ትስ/g, "ጽ");
character = character.replace(/ጽe/g, "ጸ");
character = character.replace(/ጽu/g, "ጹ");
character = character.replace(/ጽi/g, "ጺ");
character = character.replace(/ጽa/g, "ጻ");
character = character.replace(/ጸe/g, "ጼ");
character = character.replace(/ጽé/g, "ጼ");
character = character.replace(/ጽo/g, "ጾ");
character = character.replace(/ጻa/g, "ጿ");

character = character.replace(/ṣ́/g, "ፅ");
character = character.replace(/ትዝ/g, "ፅ");
character = character.replace(/ፅe/g, "ፀ");
character = character.replace(/ፅu/g, "ፁ");
character = character.replace(/ፅi/g, "ፂ");
character = character.replace(/ፅa/g, "ፃ");
character = character.replace(/ፀe/g, "ፄ");
character = character.replace(/ፅé/g, "ፄ");
character = character.replace(/ፅo/g, "ፆ");
character = character.replace(/ፃa/g, "ፇ");

character = character.replace(/[fF]/g, "ፍ");
character = character.replace(/ፍe/g, "ፈ");
character = character.replace(/ፍu/g, "ፉ");
character = character.replace(/ፍi/g, "ፊ");
character = character.replace(/ፍa/g, "ፋ");
character = character.replace(/ፈe/g, "ፌ");
character = character.replace(/ፍé/g, "ፌ");
character = character.replace(/ፍo/g, "ፎ");
character = character.replace(/ፋa/g, "ፏ");

// non identif
//character = character.replace(/ፍY/g, "ፚ");
//character = character.replace(/ፚa/g, "ፚ");

character = character.replace(/p/g, "ፕ");
character = character.replace(/ፕe/g, "ፐ");
character = character.replace(/ፕu/g, "ፑ");
character = character.replace(/ፕi/g, "ፒ");
character = character.replace(/ፕa/g, "ፓ");
character = character.replace(/ፐe/g, "ፔ");
character = character.replace(/ፕé/g, "ፔ");
character = character.replace(/ፕo/g, "ፖ");
character = character.replace(/ፓa/g, "ፗ");

// pharyngale 
character = character.replace(/ʿ/g, "ዕ");
character = character.replace(/\</g, "ዕ");
character = character.replace(/\"/g, "ዕ");
character = character.replace(/ዕe/g, "ዐ");
character = character.replace(/ዕu/g, "ዑ");
character = character.replace(/ዕi/g, "ዒ");
character = character.replace(/ዕa/g, "ዓ");
character = character.replace(/ዐe/g, "ዔ");
character = character.replace(/ዕé/g, "ዔ");
character = character.replace(/ዕo/g, "ዖ");

character = character.replace(/E/g, "ዐ");
character = character.replace(/U/g, "ዑ");
character = character.replace(/I/g, "ዒ");
character = character.replace(/A/g, "ዓ");
character = character.replace(/ዐዐ/g, "ዔ");
character = character.replace(/É/g, "ዔ");
character = character.replace(/O/g, "ዖ");

// glottales 
character = character.replace(/ʾ/g, "እ");
character = character.replace(/\>/g, "እ");
character = character.replace(/\'/g, "እ");
character = character.replace(/እe/g, "አ");
character = character.replace(/እu/g, "ኡ");
character = character.replace(/እi/g, "ኢ");
character = character.replace(/እa/g, "ኣ");
character = character.replace(/አe/g, "ኤ");
character = character.replace(/እé/g, "ኤ");
character = character.replace(/እo/g, "ኦ");
character = character.replace(/ኣa/g, "ኧ");

character = character.replace(/e/g, "አ");
character = character.replace(/u/g, "ኡ");
character = character.replace(/i/g, "ኢ");
character = character.replace(/a/g, "ኣ");
character = character.replace(/አአ/g, "ኤ");
character = character.replace(/é/g, "ኤ");
character = character.replace(/o/g, "ኦ");
character = character.replace(/ኣኣ/g, "ኧ");

//ponctuation 
character = character.replace(/-/g, "፡");
character = character.replace(/\./g, "።");
character = character.replace(/\,/g, "፣");
character = character.replace(/\;/g, "፤");
character = character.replace(/\:/g, "፥");
character = character.replace(/\!/g, "፦");
character = character.replace(/\?/g, "፧");
character = character.replace(/\//g, "፨");

character = character.replace(/1/g, "፩");
character = character.replace(/2/g, "፪");
character = character.replace(/3/g, "፫");
character = character.replace(/4/g, "፬");
character = character.replace(/5/g, "፭");
character = character.replace(/6/g, "፮");
character = character.replace(/7/g, "፯");
character = character.replace(/8/g, "፰");
character = character.replace(/9/g, "፱");
character = character.replace(/፩0/g, "፲");
character = character.replace(/፪0/g, "፳");
character = character.replace(/፫0/g, "፴");
character = character.replace(/፬0/g, "፵");
character = character.replace(/፭0/g, "፶");
character = character.replace(/፮0/g, "፷");
character = character.replace(/፯0/g, "፸");
character = character.replace(/፰0/g, "፹");
character = character.replace(/፱0/g, "፺");
character = character.replace(/፲0/g, "፻");
character = character.replace(/፳0/g, "፪፻");
character = character.replace(/፺0/g, "፱፻");
character = character.replace(/፻0/g, "፲፻");
character = character.replace(/፲፻0/g, "፼");


startPos = document.conversion.element.selectionStart;
endPos = document.conversion.element.selectionEnd;

beforeLen = document.conversion.element.value.length;
afterLen = character.length;
adjustment = afterLen - beforeLen;

document.conversion.element.value = character;

document.conversion.element.selectionStart = startPos + adjustment;
document.conversion.element.selectionEnd = endPos + adjustment;

var obj = document.conversion.element;
obj.focus();
obj.scrollTop = obj.scrollHeight;
}
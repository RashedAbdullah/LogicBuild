const surahNames = `
{"surat":[
	{"surah":"١", "name": "الفاتحة"},
	{"surah":"٢", "name": "البقرة"},
	{"surah":"٣", "name": "آل عمران"},
	{"surah":"٤", "name": "النساء"},
	{"surah":"٥", "name": "المائدة"},
	{"surah":"٦", "name": "الأنعام"},
	{"surah":"٧", "name": "الأعراف"},
	{"surah":"٨", "name": "الأنفال"},
	{"surah":"٩", "name": "التوبة"},
	{"surah":"١٠", "name": "يونس"},
	{"surah":"١١", "name": "هود"},
	{"surah":"١٢", "name": "يوسف"},
	{"surah":"١٣", "name": "الرعد"},
	{"surah":"١٤", "name": "ابراهيم"},
	{"surah":"١٥", "name": "الحجر"},
	{"surah":"١٦", "name": "النحل"},
	{"surah":"١٧", "name": "الإسراء"},
	{"surah":"١٨", "name": "الكهف"},
	{"surah":"١٩", "name": "مريم"},
	{"surah":"٢٠", "name": "طه"},
	{"surah":"٢١", "name": "الأنبياء"},
	{"surah":"٢٢", "name": "الحج"},
	{"surah":"٢٣", "name": "المؤمنون"},
	{"surah":"٢٤", "name": "النور"},
	{"surah":"٢٥", "name": "الفرقان"},
	{"surah":"٢٦", "name": "الشعراء"},
	{"surah":"٢٧", "name": "النمل"},
	{"surah":"٢٨", "name": "القصص"},
	{"surah":"٢٩", "name": "العنكبوت"},
	{"surah":"٣٠", "name": "الروم"},
	{"surah":"٣١", "name": "لقمان"},
	{"surah":"٣٢", "name": "السجدة"},
	{"surah":"٣٣", "name": "الأحزاب"},
	{"surah":"٣٤", "name": "سبإ"},
	{"surah":"٣٥", "name": "فاطر"},
	{"surah":"٣٦", "name": "يس"},
	{"surah":"٣٧", "name": "الصافات"},
	{"surah":"٣٨", "name": "ص"},
	{"surah":"٣٩", "name": "الزمر"},
	{"surah":"٤٠", "name": "غافر"},
	{"surah":"٤١", "name": "فصلت"},
	{"surah":"٤٢", "name": "الشورى"},
	{"surah":"٤٣", "name": "الزخرف"},
	{"surah":"٤٤", "name": "الدخان"},
	{"surah":"٤٥", "name": "الجاثية"},
	{"surah":"٤٦", "name": "الأحقاف"},
	{"surah":"٤٧", "name": "محمد"},
	{"surah":"٤٨", "name": "الفتح"},
	{"surah":"٤٩", "name": "الحجرات"},
	{"surah":"٥٠", "name": "ق"},
	{"surah":"٥١", "name": "الذاريات"},
	{"surah":"٥٢", "name": "الطور"},
	{"surah":"٥٣", "name": "النجم"},
	{"surah":"٥٤", "name": "القمر"},
	{"surah":"٥٥", "name": "الرحمن"},
	{"surah":"٥٦", "name": "الواقعة"},
	{"surah":"٥٧", "name": "الحديد"},
	{"surah":"٥٨", "name": "المجادلة"},
	{"surah":"٥٩", "name": "الحشر"},
	{"surah":"٦٠", "name": "الممتحنة"},
	{"surah":"٦١", "name": "الصف"},
	{"surah":"٦٢", "name": "الجمعة"},
	{"surah":"٦٣", "name": "المنافقون"},
	{"surah":"٦٤", "name": "التغابن"},
	{"surah":"٦٥", "name": "الطلاق"},
	{"surah":"٦٦", "name": "التحريم"},
	{"surah":"٦٧", "name": "الملك"},
	{"surah":"٦٨", "name": "القلم"},
	{"surah":"٦٩", "name": "الحاقة"},
	{"surah":"٧٠", "name": "المعارج"},
	{"surah":"٧١", "name": "نوح"},
	{"surah":"٧٢", "name": "الجن"},
	{"surah":"٧٣", "name": "المزمل"},
	{"surah":"٧٤", "name": "المدثر"},
	{"surah":"٧٥", "name": "القيامة"},
	{"surah":"٧٦", "name": "الانسان"},
	{"surah":"٧٧", "name": "المرسلات"},
	{"surah":"٧٨", "name": "النبإ"},
	{"surah":"٧٩", "name": "النازعات"},
	{"surah":"٨٠", "name": "عبس"},
	{"surah":"٨١", "name": "التكوير"},
	{"surah":"٨٢", "name": "الإنفطار"},
	{"surah":"٨٣", "name": "المطففين"},
	{"surah":"٨٤", "name": "الإنشقاق"},
	{"surah":"٨٥", "name": "البروج"},
	{"surah":"٨٦", "name": "الطارق"},
	{"surah":"٨٧", "name": "الأعلى"},
	{"surah":"٨٨", "name": "الغاشية"},
	{"surah":"٨٩", "name": "الفجر"},
	{"surah":"٩٠", "name": "البلد"},
	{"surah":"٩١", "name": "الشمس"},
	{"surah":"٩٢", "name": "الليل"},
	{"surah":"٩٣", "name": "الضحى"},
	{"surah":"٩٤", "name": "الشرح"},
	{"surah":"٩٥", "name": "التين"},
	{"surah":"٩٦", "name": "العلق"},
	{"surah":"٩٧", "name": "القدر"},
	{"surah":"٩٨", "name": "البينة"},
	{"surah":"٩٩", "name": "الزلزلة"},
	{"surah":"١٠٠", "name": "العاديات"},
	{"surah":"١٠١", "name": "القارعة"},
	{"surah":"١٠٢", "name": "التكاثر"},
	{"surah":"١٠٣", "name": "العصر"},
	{"surah":"١٠٤", "name": "الهمزة"},
	{"surah":"١٠٥", "name": "الفيل"},
	{"surah":"١٠٦", "name": "قريش"},
	{"surah":"١٠٧", "name": "الماعون"},
	{"surah":"١٠٨", "name": "الكوثر"},
	{"surah":"١٠٩", "name": "الكافرون"},
	{"surah":"١١٠", "name": "النصر"},
	{"surah":"١١١", "name": "المسد"},
	{"surah":"١١٢", "name": "الإخلاص"},
	{"surah":"١١٣", "name": "الفلق"},
	{"surah":"١١٤", "name": "الناس"}
]}`;
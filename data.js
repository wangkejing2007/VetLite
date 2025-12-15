const appData = {
    dailyTerms: [
        {
            term: "Zoonosis (人畜共通傳染病)",
            tag: "公共衛生",
            description: "指能在人類與動物之間自然傳播的傳染病，例如：狂犬病、禽流感。獸醫師在防範這類疾病中扮演關鍵角色。"
        },
        {
            term: "Tachycardia (心搏過速)",
            tag: "心臟學",
            description: "指心跳速率超過正常範圍。在小型犬或緊張的貓咪身上常見，但也可能是心臟疾病或疼痛的徵兆。"
        },
        {
            term: "Anorexia (厭食)",
            tag: "一般病理",
            description: "指動物食慾不振或完全不進食。這通常是許多疾病的非特異性症狀，需要進一步檢查。"
        }
    ],
    anatomyPoints: {
        dog: [
            { id: "d-brain", x: 22, y: 25, title: "Brain (腦部)", category: "神經系統", content: "中樞神經系統。老狗可能會出現「認知障礙症候群 (CCD)」。" },
            { id: "d-ear", x: 18, y: 22, title: "Ear Canal (耳道)", category: "感覺器官", content: "L型耳道構造導致通風不良，垂耳犬(如貴賓、可卡)極易罹患細菌或酵母菌性「外耳炎」。" },
            { id: "d-spine", x: 55, y: 35, title: "Spine (脊椎)", category: "骨骼系統", content: "保護脊髓。臘腸、柯基等長背狗容易發生「椎間盤突出 (IVDD)」。" },
            { id: "d-heart", x: 35, y: 55, title: "Heart (心臟)", category: "循環系統", content: "小型犬常見「二尖瓣逆流」，大型犬則多見「擴張性心肌病 (DCM)」。" },
            { id: "d-lungs", x: 42, y: 45, title: "Lungs (肺臟)", category: "呼吸系統", content: "氣體交換。短吻犬常因軟顎過長導致呼吸道阻塞症候群(BOAS)。" },
            { id: "d-spleen", x: 52, y: 58, title: "Spleen (脾臟)", category: "免疫系統", content: "老年狗常見脾臟腫瘤(血管肉瘤)，破裂時會造成內出血急診。" },
            { id: "d-stomach", x: 48, y: 52, title: "Stomach (胃)", category: "消化系統", content: "大型犬飯後劇烈運動易發生「胃擴張扭轉 (GDV)」，腹部脹大為致命急診。" },
            { id: "d-intestine", x: 60, y: 62, title: "Intestine (腸道)", category: "消化系統", content: "貪吃的小狗容易吞下異物造成阻塞，或因病毒引起「出血性腸炎」。" },
            { id: "d-bladder", x: 72, y: 65, title: "Bladder (膀胱)", category: "泌尿系統", content: "若頻尿、血尿，可能是膀胱結石或細菌性膀胱炎。" },
            { id: "d-femur", x: 78, y: 50, title: "Femur (股骨)", category: "骨骼系統", content: "大型犬常見「髖關節發育不全 (CHD)」，導致走路搖晃。" }
        ],
        cat: [
            { id: "c-brain", x: 22, y: 30, title: "Brain (腦部)", category: "神經系統", content: "前庭症候群(Vestibular Disease)會導致頭歪、眼球震顫與失去平衡。" },
            { id: "c-thyroid", x: 30, y: 42, title: "Thyroid (甲狀腺)", category: "內分泌", content: "位於喉部兩側。老貓常見「甲狀腺亢進」，症狀為食慾大增卻體重減輕、亢奮。" },
            { id: "c-scapula", x: 35, y: 45, title: "Scapula (肩胛骨)", category: "骨骼系統", content: "懸吊式肩帶賦予貓咪極佳的靈活性。注射疫苗常選在此區皮下。" },
            { id: "c-heart", x: 42, y: 60, title: "Heart (心臟)", category: "循環系統", content: "「肥厚性心肌病 (HCM)」是貓沉默殺手，易導致動脈血栓造成後腳癱瘓。" },
            { id: "c-lungs", x: 45, y: 50, title: "Lungs (肺臟)", category: "呼吸系統", content: "貓咪若像母雞蹲且伸長脖子咳嗽，可能不是吐毛球，而是「貓氣喘」。" },
            { id: "c-liver", x: 50, y: 62, title: "Liver (肝臟)", category: "消化系統", content: "肥胖貓若長時間絕食，易引發「脂肪肝」，造成黃疸與肝衰竭。" },
            { id: "c-kidney", x: 58, y: 55, title: "Kidney (腎臟)", category: "泌尿系統", content: "7歲以上老貓極高比例患有慢性腎病(CKD)。多喝水是關鍵。" },
            { id: "c-stomach", x: 52, y: 68, title: "Stomach (胃)", category: "消化系統", content: "易堆積毛球。頻繁嘔吐需注意是否為淋巴瘤或異物。" },
            { id: "c-colon", x: 75, y: 65, title: "Colon (結腸)", category: "消化系統", content: "神經問題或骨盆狹窄可能導致糞便堆積，形成「巨結腸症」。" },
            { id: "c-bladder", x: 70, y: 75, title: "Bladder (膀胱)", category: "泌尿系統", content: "公貓易因壓力引發「自發性膀胱炎 (FIC)」，導致尿道阻塞。" }
        ],
        bird: [
            { id: "b-beak", x: 40, y: 28, title: "Beak (喙)", category: "消化/外觀", content: "用於進食與攀爬。肝臟疾病或疥癬蟲可能導致喙部生長異常或變形。" },
            { id: "b-crop", x: 50, y: 32, title: "Crop (嗉囊)", category: "消化系統", content: "食道膨大處。手餵幼鳥溫度不當易致「嗉囊燙傷」或「食滯」。" },
            { id: "b-wing", x: 55, y: 42, title: "Wing (翅膀)", category: "骨骼系統", content: "包含肱骨、尺骨等。不當的剪羽(Clipping)會造成心理壓力或跌落受傷。" },
            { id: "b-syrinx", x: 40, y: 42, title: "Syrinx (鳴管)", category: "呼吸系統", content: "鳥類的發聲器官，位於氣管分叉處。比人類的聲帶構造更複雜。" },
            { id: "b-provent", x: 48, y: 50, title: "Proventriculus (腺胃)", category: "消化系統", content: "真胃，分泌消化液。PDD病毒會攻擊此處神經導致腺胃擴張。" },
            { id: "b-keel", x: 38, y: 58, title: "Keel (龍骨)", category: "骨骼系統", content: "附著飛行肌肉。觸摸龍骨包覆度(BCS)是判斷鳥類胖瘦的指標。過瘦代表生病。" },
            { id: "b-liver", x: 45, y: 60, title: "Liver (肝臟)", category: "消化系統", content: "單一飲食(只吃瓜子)的鳥容易罹患「脂肪肝」，導致喙部出血點與指甲生長過長。" },
            { id: "b-gizzard", x: 50, y: 65, title: "Gizzard (肌胃)", category: "消化系統", content: "這個肌肉胃負責磨碎食物。鳥類誤食金屬(如鉛鋅)常沉積於此造成中毒。" },
            { id: "b-airsac", x: 60, y: 55, title: "Air Sacs (氣囊)", category: "呼吸系統", content: "氣囊遍布全身，對鐵氟龍(不沾鍋)加熱產生的氣體極度敏感，會瞬間致死。" },
            { id: "b-vent", x: 42, y: 78, title: "Cloaca (洩殖腔)", category: "生殖泌尿", content: "三合一出口。母鳥常見腹部膨大、呼吸急促，可能是「卡蛋 (Egg Binding)」急診。" }
        ],
        horse: [
            { id: "h-teeth", x: 18, y: 35, title: "Teeth (牙齒)", category: "消化系統", content: "終身生長。需定期磨牙(Floating)，否則邊緣變尖會刺傷臉頰導致拒食。" },
            { id: "h-neck", x: 28, y: 30, title: "Jugular Groove (頸靜脈)", category: "循環系統", content: "頸部兩側的凹槽，是獸醫師進行抽血、靜脈注射最常用的位置。" },
            { id: "h-withers", x: 40, y: 25, title: "Withers (鬐甲)", category: "骨骼系統", content: "背部最高點。馬鞍若不合身會摩擦此處造成「馬鞍傷 (Saddle Sore)」。" },
            { id: "h-lungs", x: 45, y: 45, title: "Lungs (肺臟)", category: "呼吸系統", content: "賽馬高強度運動後常發生「運動誘發性肺出血 (EIPH)」，俗稱流鼻血。" },
            { id: "h-heart", x: 38, y: 55, title: "Heart (心臟)", category: "循環系統", content: "馬的心臟極大。常見心律不整如「心房顫動 (A-fib)」，影響運動表現。" },
            { id: "h-stomach", x: 48, y: 50, title: "Stomach (胃)", category: "消化系統", content: "馬胃很小且無法嘔吐。高壓力與高精料餵食常導致「胃潰瘍 (EGUS)」。" },
            { id: "h-gut", x: 58, y: 58, title: "Colon (結腸)", category: "消化系統", content: "巨大的發酵槽。極易發生移位、扭轉與氣脹，統稱為「腹痛 (Colic)」。" },
            { id: "h-stifle", x: 70, y: 58, title: "Stifle (膝關節)", category: "骨骼系統", content: "相當於人類的膝蓋。發育期間容易出現「骨軟骨病 (OCD)」。" },
            { id: "h-fetlock", x: 75, y: 75, title: "Fetlock (球節)", category: "骨骼系統", content: "承受巨大衝擊的關節，是賽馬最容易發生骨折與韌帶受傷的部位。" },
            { id: "h-hoof", x: 72, y: 88, title: "Hoof (蹄)", category: "骨骼系統", content: "「無蹄即無馬」。飲食過量糖分易引發「蹄葉炎 (Laminitis)」，劇痛難行。" }
        ],
        fish: [
            { id: "f-gills", x: 28, y: 50, title: "Gills (鰓)", category: "呼吸系統", content: "氣體交換與離子調節。寄生蟲(如吸蟲)與水質不良(氨中毒)常導致鰓部受損。" },
            { id: "f-latline", x: 55, y: 48, title: "Lateral Line (側線)", category: "感覺器官", content: "魚身體兩側的感知線，能偵測水流震動與壓力變化，是魚的「第六感」。" },
            { id: "f-swimbladder", x: 45, y: 40, title: "Swim Bladder (魚鰾)", category: "浮力調節", content: "控制浮沉。像金魚這種短身魚，容易因消化不良或細菌感染導致「翻肚症 (SBD)」。" },
            { id: "f-heart", x: 32, y: 65, title: "Heart (心臟)", category: "循環系統", content: "位於鰓蓋正下方。魚的心臟只有兩腔(一心房一心室)，比哺乳類簡單。" },
            { id: "f-kidney", x: 50, y: 35, title: "Kidney (腎臟)", category: "泌尿/免疫", content: "緊貼脊椎下方。除了排泄，前腎(Head Kidney)也是魚類主要的造血與免疫器官。" },
            { id: "f-liver", x: 38, y: 60, title: "Liver (肝臟)", category: "消化系統", content: "代謝與解毒。營養不均衡或飼料氧化變質常導致「脂肪肝」與肝腫大。" },
            { id: "f-fin-d", x: 48, y: 20, title: "Dorsal Fin (背鰭)", category: "運動系統", content: "維持平衡。長期水質緊迫會導致鰭條邊緣腐爛，俗稱「爛鰭病 (Fin Rot)」。" },
            { id: "f-fin-c", x: 80, y: 50, title: "Caudal Fin (尾鰭)", category: "運動系統", content: "主要的推進力來源。尾鰭充血或出現血絲，通常是水質惡化(亞硝酸過高)的警訊。" },
            { id: "f-fin-a", x: 65, y: 68, title: "Anal Fin (臀鰭)", category: "運動系統", content: "位於肛門後方，協助穩定游動。鑑別公母(如孔雀魚)的重要部位。" },
            { id: "f-scales", x: 45, y: 50, title: "Scales (鱗片/黏膜)", category: "皮膚系統", content: "第一道防線。體表黏膜層含有抗體。立鱗(松果病)代表嚴重的體內積水與細菌感染。" }
        ]
    },
    flashcards: [
        {
            id: 1,
            category: "anatomy",
            question: "犬隻身體最大的骨頭是哪一根？",
            answer: "Femur (股骨)",
            explanation: "股骨位於後肢的大腿部位，支撐身體重量並協助運動。",
            difficulty: "normal"
        },
        {
            id: 2,
            category: "anatomy",
            question: "貓咪舌頭上的倒刺是什麼構造？",
            answer: "Filiform papillae (絲狀乳頭)",
            explanation: "這些特化的角質化結構幫助貓咪梳理毛髮，並在進食時刮下骨頭上的肉。",
            difficulty: "easy"
        },
        {
            id: 3,
            category: "physiology",
            question: "紅血球(RBC)的主要功能是什麼？",
            answer: "運輸氧氣",
            explanation: "紅血球含有血紅素，能結合氧氣並將其運送到身體各個組織。",
            difficulty: "easy"
        },
        {
            id: 4,
            category: "clinical",
            question: "CRT (微血管回充時間) 正常應小於幾秒？",
            answer: "< 2 秒",
            explanation: "按壓牙齦後變白，放開後恢復粉紅色的時間。若 > 2秒可能代表脫水或血液循環不良。",
            difficulty: "hard"
        },
        {
            id: 5,
            category: "pharmacology",
            question: "NSAIDs (非類固醇消炎藥) 絕對不能給哪種動物吃人類的普拿疼？",
            answer: "貓 (Cats)",
            explanation: "貓缺乏代謝乙醯胺酚(Acetaminophen)的酵素，微量即可造成中毒、溶血甚至死亡。",
            difficulty: "normal"
        },
        {
            id: 6,
            category: "parasitology",
            question: "心絲蟲 (Heartworm) 主要透過什麼媒介傳播？",
            answer: "蚊子 (Mosquitoes)",
            explanation: "蚊子叮咬時將微絲蟲注入動物體內，最終會在肺動脈與心臟發育為成蟲。",
            difficulty: "normal"
        },
        { id: 7, category: "virology", question: "犬小病毒 (Parvovirus) 最典型的致死原因是？", answer: "出血性腸炎導致的脫水與敗血症", explanation: "此病毒攻擊腸道絨毛細胞，導致嚴重血痢、白血球下降。", difficulty: "normal" },
        { id: 8, category: "toxicology", question: "百合花 (Lily) 對哪種動物具有致命腎毒性？", answer: "貓 (Cat)", explanation: "貓咪只要吃到極少量的百合花瓣或花粉，就會引發急性腎衰竭。", difficulty: "hard" },
        { id: 9, category: "surgery", question: "高壓蒸氣滅菌 (Autoclave) 的標準條件為何？", answer: "121°C, 15分鐘, 15psi", explanation: "這是殺死細菌芽孢的黃金標準，用於手術器械滅菌。", difficulty: "normal" },
        { id: 10, category: "exotic", question: "兔子是絕對的草食性動物，其牙齒特徵為何？", answer: "終身生長 (Open-rooted)", explanation: "兔子的門齒與臼齒都會不斷生長，需靠大量牧草磨牙，否則會牙根逆長。", difficulty: "easy" },
        { id: 11, category: "oncology", question: "母犬在第一次發情前結紮，可將乳腺腫瘤風險降至多少？", answer: "0.5%", explanation: "早期絕育是預防乳腺腫瘤最有效的方法。隨著發情次數增加，保護力遞減。", difficulty: "normal" },
        { id: 12, category: "radiology", question: "在X光片上，氣體的密度呈現什麼顏色？", answer: "黑色 (Black)", explanation: "X光能輕易穿透氣體，感光度最高，故呈黑色。金屬或骨頭則呈白色。", difficulty: "easy" },
        { id: 13, category: "clinical", question: "微血管回充時間 (CRT) 延長代表什麼？", answer: "周邊血液循環不良或脫水", explanation: "正常應<2秒。若>2秒可能暗示休克、心臟衰竭或嚴重脫水。", difficulty: "normal" },
        { id: 14, category: "ophthalmology", question: "螢光染色 (Fluorescein stain) 是用來檢查什麼？", answer: "角膜潰瘍 (Corneal Ulcer)", explanation: "受損的角膜基質層會吸收染劑呈現綠色，完整的角膜則不會染色。", difficulty: "normal" },
        { id: 15, category: "zoonosis", question: "孕婦應避免清理貓砂，是為了預防哪種寄生蟲？", answer: "弓漿蟲 (Toxoplasmosis)", explanation: "感染弓漿蟲可能導致胎兒流產或畸形，雖然機率不高，但仍建議由家人代勞。", difficulty: "normal" },
        { id: 16, category: "pharmacology", question: "Ivermectin 對哪種犬種可能誘發神經毒性？", answer: "牧羊犬系 (如 Collie, Sheltie)", explanation: "因為MDR1基因缺陷，藥物會穿透血腦障壁導致中毒。", difficulty: "hard" },
        { id: 17, category: "physiology", question: "哺乳類動物中，唯一紅血球是有核的是？", answer: "駱駝 (Camel)", explanation: "更正：駱駝紅血球無核但呈橢圓形。鳥類、爬蟲與魚類的紅血球全都有核。", difficulty: "hard" },
        { id: 18, category: "clinical", question: "「櫻桃眼 (Cherry Eye)」是指哪個部位脫出？", answer: "第三眼瞼腺體 (Gland of Nictitating Membrane)", explanation: "不建議切除，應以手術復位保留，否則日後極易發生乾眼症。", difficulty: "normal" },
        { id: 19, category: "parasitology", question: "壁蝨 (Tick) 是哪種血液寄生蟲的主要傳播媒介？", answer: "焦蟲 / 艾利希體 (Babesia / Ehrlichia)", explanation: "壁蝨叮咬會傳播多種病原，導致貧血、血小板低下。", difficulty: "normal" },
        { id: 20, category: "feline", question: "貓傳染性腹膜炎 (FIP) 是由什麼病毒變異而來？", answer: "貓冠狀病毒 (FCoV)", explanation: "原本只引起輕微腸炎的冠狀病毒，在貓體內突變後攻擊免疫系統導致致死性的FIP。", difficulty: "hard" },
        { id: 21, category: "anatomy", question: "犬共有幾對乳腺？", answer: "5 對 (通常)", explanation: "通常為 5 對 (10個)，但個體差異可能從 4-6 對不等。貓通常為 4 對。", difficulty: "normal" },
        { id: 22, category: "nutrition", question: "貓為什麼必需攝取「牛磺酸 (Taurine)」？", answer: "無法自行合成，缺乏會導致心肌病與視網膜退化", explanation: "狗可以自行合成，但貓是絕對肉食動物，必需直接從肉類攝取。", difficulty: "normal" },
        { id: 23, category: "behavior", question: "貓咪若是出現「噴尿 (Spraying)」行為，通常是為了？", answer: "標記地盤 (Marking)", explanation: "噴尿是站立且尾巴顫抖，與蹲下排尿不同，通常與壓力或發情有關。", difficulty: "easy" },
        { id: 24, category: "emergency", question: "中暑(Heat Stroke)急救時，不可以做什麼？", answer: "浸泡冰水", explanation: "冰水會導致周邊血管收縮，反而將熱能鎖在體內，應使用常溫水潑灑降溫。", difficulty: "hard" },
        { id: 25, category: "radiology", question: "骨頭斷裂時，X光片上呈現的黑色線條稱為？", answer: "骨折線 (Fracture line)", explanation: "黑線代表骨頭連續性中斷的間隙。", difficulty: "easy" },
        { id: 26, category: "dentistry", question: "犬貓牙齒最常見的疾病是？", answer: "牙周病 (Periodontal Disease)", explanation: "牙菌斑堆積形成牙結石，導致牙齦發炎、齒槽骨流失。", difficulty: "easy" },
        { id: 27, category: "endocrinology", question: "庫興氏症 (Cushing's Disease) 是指哪種激素過多？", answer: "腎上腺皮質醇 (Cortisol)", explanation: "常見症狀包括多喝多尿、腹部下垂、對稱性脫毛。", difficulty: "normal" },
        { id: 28, category: "reptile", question: "爬蟲類(如陸龜)缺乏維生素D3與UVB會導致？", answer: "代謝性骨病 (MBD)", explanation: "導致龜殼軟化、骨折變形，是人為飼養最常見的問題。", difficulty: "normal" },
        { id: 29, category: "exotic", question: "天竺鼠無法自行合成哪種維生素？", answer: "維生素 C", explanation: "與人類一樣，天竺鼠必須每日透過蔬果攝取維生素C，否則會壞血病。", difficulty: "easy" },
        { id: 30, category: "surgery", question: "縫線規格中，2-0 與 4-0 哪一個比較細？", answer: "4-0", explanation: "數字越大越細。2-0 用於大狗皮膚，4-0 用於貓或腸道吻合。", difficulty: "normal" },
        { id: 31, category: "pathology", question: "黃疸 (Jaundice) 是因為血液中堆積了什麼？", answer: "膽紅素 (Bilirubin)", explanation: "可能源自溶血(肝前)、肝病(肝性)或膽道阻塞(肝後)。", difficulty: "hard" },
        { id: 32, category: "neurology", question: "癲癇發作時，飼主首要動作是？", answer: "移開周圍危險物品，保持安靜", explanation: "切勿將手伸入動物口中，牠們不會咬舌頭但會咬斷你的手指。", difficulty: "normal" },
        { id: 33, category: "reproduction", question: "狗的懷孕期平均約為幾天？", answer: "63 天 (約2個月)", explanation: "範圍約在 58-68 天之間。貓的懷孕期也相當接近。", difficulty: "easy" },
        { id: 34, category: "anesthesia", question: "插管前用於評估麻醉深度的反射是？", answer: "吞嚥反射 (Swallowing reflex) 消失", explanation: "當動物不再吞嚥且下顎張力鬆弛時，才可進行插管。", difficulty: "normal" },
        { id: 35, category: "cardiology", question: "PDA (存開性動脈導管) 會聽到什麼特殊的雜音？", answer: "機械性雜音 (Machinery murmur)", explanation: "連續性的雜音，這是幼犬常見的先天性心臟病。", difficulty: "hard" },
        { id: 36, category: "public_health", question: "狂犬病 (Rabies) 的致死率約為？", answer: "接近 100%", explanation: "一旦發病，無論人或動物幾乎必死無疑，疫苗接種是唯一預防手段。", difficulty: "normal" },
        { id: 37, category: "clinical", question: "皮下注射英文縮寫是？", answer: "SC / SQ", explanation: "Subcutaneous。IV為靜脈，IM為肌肉，PO為口服。", difficulty: "easy" },
        { id: 38, category: "internal_med", question: "胰臟炎的快篩試劑檢測的是什麼數值？", answer: "cPL / fPL (特異性胰脂肪酶)", explanation: "比傳統的血檢 Amylase/Lipase 更準確。", difficulty: "normal" },
        { id: 39, category: "anatomy", question: "橫隔膜 (Diaphragm) 將哪兩個腔室分開？", answer: "胸腔 與 腹腔", explanation: "若橫隔膜破裂(如車禍)，腹腔臟器會進入胸腔壓迫肺部，稱為橫隔膜赫尼亞。", difficulty: "normal" },
        { id: 40, category: "virus", question: "貓白血病 (FeLV) 主要透過什麼傳染？", answer: "唾液 (互相理毛、共食)", explanation: "因此被稱為「友善貓的疾病」。", difficulty: "normal" },
        { id: 41, category: "virus", question: "貓愛滋 (FIV) 主要透過什麼傳染？", answer: "打架咬傷 (血液)", explanation: "因此被稱為「不友善貓的疾病」，公貓感染率較高。", difficulty: "normal" },
        { id: 42, category: "parasite", question: "哪種體內寄生蟲會造成「貧血」與「黑便」？", answer: "鉤蟲 (Hookworm)", explanation: "鉤蟲會咬住腸壁吸血，造成嚴重的幼犬貧血。", difficulty: "normal" },
        { id: 43, category: "exotic", question: "倉鼠頰囊由來？", answer: "儲存食物與搬運墊材", explanation: "若推擠不出或受傷，容易導致頰囊脫出或膿腫。", difficulty: "easy" },
        { id: 44, category: "nutrition", question: "不能給狗吃洋蔥，是因為會造成？", answer: "溶血性貧血 (Heinz body anemia)", explanation: "洋蔥中的硫化物會破壞紅血球。", difficulty: "normal" },
        { id: 45, category: "behavior", question: "狗搖尾巴一定代表快樂嗎？", answer: "不一定", explanation: "搖尾巴僅代表「激動」。若尾巴高舉且僵硬擺動，可能是攻擊前兆。", difficulty: "easy" },
        { id: 46, category: "opthalmology", question: "白內障 (Cataract) 是哪個構造變混濁？", answer: "水晶體 (Lens)", explanation: "常被誤認為核硬化(老化現象)。白內障會阻擋光線導致失明。", difficulty: "normal" },
        { id: 47, category: "urology", question: "貓下泌尿道症候群 (FLUTD) 的常見症狀？", answer: "頻尿、血尿、隨地亂尿", explanation: "這是一個統稱，包含結石、感染或自發性膀胱炎。", difficulty: "normal" },
        { id: 48, category: "zoonosis", question: "萊姆病 (Lyme disease) 的傳播媒介是？", answer: "壁蝨 (Tick)", explanation: "人畜共通，特徵是遊走性紅斑與關節炎。", difficulty: "normal" },
        { id: 49, category: "drug", question: "為了做心臟超音波，常用哪種藥物讓貓鎮靜？", answer: "Gabapentin", explanation: "這是一種口服藥，雖主要用於神經痛，但在貓身上有極佳的抗焦慮與鎮靜效果。", difficulty: "hard" },
        { id: 50, category: "anatomy", question: "負責平衡感的器官位於？", answer: "內耳 (前庭系統)", explanation: "包括半規管與耳石，若受損會導致頭歪與眼球震顫。", difficulty: "normal" },
        { id: 51, category: "fluid_therapy", question: "休克急救時首選的晶體輸液是？", answer: "LRS (乳酸林格氏液) 或 生理食鹽水", explanation: "LRS成分接近血漿，能有效擴充血容積。肝衰竭患者則建議避開LRS。", difficulty: "normal" },
        { id: 52, category: "hematology", question: "血液抹片中出現「帶核紅血球 (nRBC)」通常暗示？", answer: "骨髓強烈再生反應 或 脾臟受損", explanation: "骨髓為了補償貧血，將尚未成熟的紅血球釋放到周邊血液中。", difficulty: "hard" },
        { id: 53, category: "endocrine", question: "愛迪生氏症 (Addison's Disease) 是指哪種激素不足？", answer: "腎上腺皮質醇 與 礦物皮質酮", explanation: "又稱腎上腺皮質功能低下，典型電解質異常為「高鉀低鈉」。", difficulty: "hard" },
        { id: 54, category: "breed", question: "臘腸犬 (Dachshund) 最容易發生的遺傳疾病是？", answer: "椎間盤突出 (IVDD)", explanation: "因軟骨發育異常基因，導致椎間盤提早鈣化與失去彈性。", difficulty: "easy" },
        { id: 55, category: "anesthesia", question: "Propofol 作為誘導麻醉藥，著名的副作用是？", answer: "短暫呼吸暫停 (Apnea)", explanation: "推藥速度過快容易引起呼吸抑制，應緩慢給予。", difficulty: "normal" },
        { id: 56, category: "parasitology", question: "貓抓病 (Cat Scratch Disease) 的病原是？", answer: "韩瑟勒巴通氏菌 (Bartonella henselae)", explanation: "透過跳蚤傳播給貓，人被帶菌貓抓傷後會淋巴結腫大。", difficulty: "normal" },
        { id: 57, category: "radiology", question: "食道異物最容易卡在哪三個位置？", answer: "胸腔入口、心臟基部、橫膈裂孔", explanation: "這三處是食道解剖構造上較狹窄的地方。", difficulty: "hard" },
        { id: 58, category: "avian", question: "鳥類如果不吃含有鈣質的紅土，容易缺乏什麼？", answer: "鈣質 與 幫助磨碎食物的砂礫", explanation: "種子食性的鳥類依賴肌胃中的砂礫(Grit)來磨碎食物。", difficulty: "easy" },
        { id: 59, category: "pharmacology", question: "Atropine 在急救時的主要作用是？", answer: "提升心跳 (解除迷走神經抑制)", explanation: "用於治療嚴重的竇性心搏過緩 (Bradycardia)。", difficulty: "normal" },
        { id: 60, category: "urology", question: "尿檢出現「磷酸銨鎂 (Struvite)」，尿液pH值通常偏？", answer: "鹼性 (Alkaline)", explanation: "因此處方飼料通常會酸化尿液來溶解此類結石。", difficulty: "normal" },
        { id: 61, category: "breed", question: "雪納瑞 (Schnauzer) 天生容易罹患什麼內科病？", answer: "胰臟炎 與 高血脂症", explanation: "此品種代謝脂肪的能力較差，應避免高油脂飲食。", difficulty: "normal" },
        { id: 62, category: "dentistry", question: "貓咪牙齒出現溶蝕般的凹洞，稱為？", answer: "FORL (貓牙齒吸收病變)", explanation: "極度疼痛，通常無法補牙，拔牙是唯一的治療方式。", difficulty: "hard" },
        { id: 63, category: "pathology", question: "腫瘤細胞若為「圓形細胞 (Round cell)」，可能為？", answer: "肥大細胞瘤、淋巴瘤、TVT", explanation: "這類腫瘤在細胞學下細胞邊界清晰，呈圓形獨立散佈。", difficulty: "hard" },
        { id: 64, category: "zoonosis", question: "鉤端螺旋體 (Leptospirosis) 主要攻擊哪兩個器官？", answer: "腎臟 與 肝臟", explanation: "透過帶菌老鼠尿液傳播，會造成急性腎衰竭與黃疸。", difficulty: "normal" },
        { id: 65, category: "emergency", question: "胃扭轉 (GDV) 的X光片特徵影像稱為？", answer: "雙氣泡徵 (Double bubble) 或 藍精靈帽", explanation: "顯示胃幽門部移位並充滿氣體，將胃分隔成兩個氣室。", difficulty: "hard" },
        { id: 66, category: "ophthalmology", question: "乾眼症 (KCS) 是缺乏哪一層淚膜？", answer: "水液層 (Aqueous layer)", explanation: "使用 Schirmer Tears Test (STT) 試紙測量，正常應 >15mm/min。", difficulty: "normal" },
        { id: 67, category: "reptile", question: "陸龜如果一直張嘴呼吸、流鼻水，是得到？", answer: "肺炎 (Pneumonia)", explanation: "通常源於飼養環境溫度過低或濕度不當。", difficulty: "normal" },
        { id: 68, category: "fluid", question: "脫水程度達多少%時，皮膚彈性會明顯變差(Tenting)？", answer: "5-8 %", explanation: "<5%臨床難以察覺，>10%會出現甚至休克徵兆。", difficulty: "normal" },
        { id: 69, category: "breed", question: "柯基犬 (Corgi) 斷尾的主要原因是？", answer: "歷史上牧牛需求，現多為外觀標準", explanation: "避免牛隻踩踏尾巴。現在許多國家已禁止美容性斷尾。", difficulty: "easy" },
        { id: 70, category: "parasitology", question: "毛囊蟲 (Demodex) 是會傳染給其他狗的嗎？", answer: "通常不會", explanation: "毛囊蟲是皮膚共生菌，發病多因「免疫力下降」，而非接觸傳染。", difficulty: "normal" },
        { id: 71, category: "cardiology", question: "貓咪若突發雙後肢癱瘓、腳掌冰冷，是因為？", answer: "血栓 (ATE / Saddle Thrombus)", explanation: "90%源自心臟病(HCM)，血栓塞在主動脈分叉處。", difficulty: "hard" },
        { id: 72, category: "neurology", question: "狂犬病疫苗法規規定犬貓多大需施打第一劑？", answer: "3 - 4 個月齡", explanation: "之後每年需補強一次，並配戴頸牌。", difficulty: "easy" },
        { id: 73, category: "surgery", question: "公貓導尿時，導尿管容易卡在哪個構造？", answer: "尿道球腺 (Bulbourethral gland) 轉彎處", explanation: "需將陰莖平行脊椎向後拉直，才能順利通過。", difficulty: "hard" },
        { id: 74, category: "nutrition", question: "木糖醇 (Xylitol) 對狗有劇毒，會導致？", answer: "低血糖 與 肝衰竭", explanation: "刺激胰島素大量釋放。常見於無糖口香糖。", difficulty: "normal" },
        { id: 75, category: "anatomy", question: "貓爪伸縮是靠哪條韌帶？", answer: "背側彈性韌帶 (Dorsal elastic ligament)", explanation: "平時韌帶收縮將爪子藏入鞘內，攻擊時肌肉收縮伸出爪子。", difficulty: "hard" },
        { id: 76, category: "public_health", question: "Q熱 (Q fever) 的病原是？", answer: "貝氏考克斯菌 (Coxiella burnetii)", explanation: "常見於羊與牛，獸醫協助接生時吸入羊水氣霧易感染。", difficulty: "hard" },
        { id: 77, category: "behavior", question: "費洛蒙 (Pheromone) 是由哪個器官接收的？", answer: "梨鼻器 (Vomeronasal organ)", explanation: "動物會做出「裂唇嗅反應 (Flehmen response)」來將氣味導入此器官。", difficulty: "normal" },
        { id: 78, category: "dermatology", question: "伍氏燈 (Wood's Lamp) 照出螢光綠色，代表感染？", answer: "犬小孢子菌 (Microsporum canis)", explanation: "這是最常見的皮黴菌(貓癬)病原，約50%菌株會發螢光。", difficulty: "normal" },
        { id: 79, category: "exotic", question: "天竺鼠若長期維生素C不足，會出現？", answer: "關節腫脹、牙齦出血、行動困難", explanation: "即壞血病 (Scurvy)。", difficulty: "normal" },
        { id: 80, category: "breed", question: "哪種狗狗對於麻醉藥特別敏感，因為體脂極低？", answer: "灰狗 (Greyhound) 等視覺獵犬", explanation: "巴比妥類藥物依靠脂肪重新分佈代謝，瘦狗代謝極慢。", difficulty: "hard" },
        { id: 81, category: "clinical", question: "聽診時若聽到「破鑼音/濕囉音 (Crackles)」，代表？", answer: "肺泡內有液體 (肺水腫/肺炎)", explanation: "就像搓揉頭髮的聲音，暗示肺部積水。", difficulty: "normal" },
        { id: 82, category: "genetics", question: "蘇格蘭摺耳貓 (Scottish Fold) 必定帶有什麼基因缺陷？", answer: "軟骨發育不全 (Osteochondrodysplasia)", explanation: "摺耳即是軟骨缺陷的表現，四肢關節最終都會骨質增生劇痛。", difficulty: "normal" },
        { id: 83, category: "surgery", question: "卵巢子宮切除術 (OHE) 必須移除？", answer: "雙側卵巢 與 整個子宮", explanation: "只移除卵巢或只結紮輸卵管，未來仍可能發生子宮蓄膿。", difficulty: "normal" },
        { id: 84, category: "poison", question: "老鼠藥中毒通常是哪種類型？", answer: "抗凝血劑 (Anticoagulant)", explanation: "阻斷維生素K循環，導致內出血。解毒劑為 Vitamin K1。", difficulty: "normal" },
        { id: 85, category: "anatomy", question: "馬的盲腸 (Cecum) 主要功能是？", answer: "發酵纖維素", explanation: "馬是後腸發酵動物，盲腸扮演類似牛瘤胃的角色。", difficulty: "easy" },
        { id: 86, category: "cardiology", question: "心絲蟲成蟲主要寄生在心臟的哪個腔室？", answer: "右心室 與 肺動脈", explanation: "造成右心衰竭與肺高壓。", difficulty: "normal" },
        { id: 87, category: "pathology", question: "發生「溶血」時，血漿會呈現什麼顏色？", answer: "紅色 (Hemolysis)", explanation: "若呈黃色為黃疸(Icterus)，乳白色則為脂血(Lipemia)。", difficulty: "normal" },
        { id: 88, category: "feline", question: "貓咪必須攝取哪種氨基酸來預防視網膜病變？", answer: "牛磺酸 (Taurine)", explanation: "也會預防擴張性心肌病。", difficulty: "easy" },
        { id: 89, category: "virus", question: "犬瘟熱 (Distemper) 的特殊症狀「硬蹠症」是指？", answer: "腳掌肉墊角質化變硬", explanation: "病毒攻擊上皮細胞所致。此外也會有神經症狀(抽搐)。", difficulty: "normal" },
        { id: 90, category: "breed", question: "短吻犬 (如法鬥) 常見的呼吸道問題不包括？", answer: "氣管塌陷 (此為約克夏常見)", explanation: "短吻犬症候群(BOAS)包括：鼻孔狹窄、軟顎過長、喉小囊外翻。", difficulty: "hard" },
        { id: 91, category: "behavior", question: "貓咪一直用頭去頂牆壁 (Head Pressing) 代表？", answer: "神經系統受損 或 肝腦病", explanation: "這不是在撒嬌，是極度頭痛或腦壓過高的警訊。", difficulty: "hard" },
        { id: 92, category: "parasite", question: "絛蟲 (Tapeworm) 的中間宿主通常是？", answer: "跳蚤 (Flea)", explanation: "動物吞食帶有絛蟲幼蟲的跳蚤而感染。糞便會有像芝麻的節片。", difficulty: "normal" },
        { id: 93, category: "reptile", question: "蛇類蛻皮時，眼睛會呈現什麼顏色？", answer: "混濁藍白色 (Blue eye)", explanation: "這是淋巴液在舊皮與新皮之間分離的現象，此時蛇視力很差且暴躁。", difficulty: "normal" },
        { id: 94, category: "emergency", question: "做 CPR 時，胸腔按壓的頻率應為？", answer: "100 - 120 下/分鐘", explanation: "與人類CPR標準相同 (Stayin' Alive 的節奏)。", difficulty: "normal" },
        { id: 95, category: "radiology", question: "懷孕幾天後，X光片上才可見胎兒骨骼鈣化？", answer: "約 42 - 45 天", explanation: "這時照X光可以準確計算胎兒數量。", difficulty: "normal" },
        { id: 96, category: "pharmacology", question: "類固醇 (Steroids) 長期使用若突然停藥會導致？", answer: "愛迪生氏症危機 (Addisonian Crisis)", explanation: "因外源性抑制，自身腎上腺已萎縮，需慢慢減量停藥(Taper off)。", difficulty: "hard" },
        { id: 97, category: "clinical", question: "測量眼壓 (IOP) 是為了診斷？", answer: "青光眼 (Glaucoma) 或 葡萄膜炎", explanation: "高於正常值(>25mmHg)為青光眼，過低可能為葡萄膜炎。", difficulty: "normal" },
        { id: 98, category: "anatomy", question: "鳥類沒有橫隔膜，呼吸靠什麼？", answer: "胸骨與肋骨的擴張壓縮氣囊", explanation: "因此保定鳥類時絕對不能用力壓迫胸部，會導致窒息。", difficulty: "normal" },
        { id: 99, category: "lab", question: "PCV (血容比) 低於多少通常需要輸血？", answer: "< 20% (急性) 或 < 15% (慢性)", explanation: "需視臨床症狀而定，但通常低於20%已達嚴重貧血。", difficulty: "hard" },
        { id: 100, category: "vet_life", question: "獸醫師誓詞的核心精神是？", answer: "利用專業知識與技能，促進動物福利與減輕痛苦", explanation: "不論是治療、預防或人道處置，皆以動物福祉為最高指導原則。", difficulty: "easy" }
    ],
    clinicalCases: [
        {
            id: 1,
            species: "dog",
            patient: "多多 (貴賓犬, 5歲)",
            symptom: "主人說多多最近一直用力甩頭，還會用腳去抓右邊的耳朵。靠近聞有一股酸臭味。",
            options: [
                { id: "a", text: "可能是心情不好，多陪牠玩就好", correct: false, feedback: "錯誤。頻繁甩頭與抓癢是明顯的不適表現，忽視它會導致病情惡化。" },
                { id: "b", text: "檢查耳道，進行耳垢抹片分析", correct: true, feedback: "正確！垂耳犬常見「外耳炎」。酸臭味通常暗示酵母菌或細菌感染，必須透過抹片確診。" },
                { id: "c", text: "立刻安排全身麻醉洗牙", correct: false, feedback: "錯誤。雖然牙齒可能有問題，但目前的急迫症狀在耳朵，麻醉風險需在健康評估後才進行。" }
            ]
        },
        {
            id: 2,
            species: "cat",
            patient: "咪咪 (米克斯, 14歲)",
            symptom: "咪咪最近食慾超級好，一直要東西吃，但是體重卻越來越輕。而且喝水量跟尿量都變很大。",
            options: [
                { id: "a", text: "这是老当益壮，不用担心", correct: false, feedback: "錯誤。老年貓食慾大增卻變瘦，絕對是身體出了問題，絕非正常老化。" },
                { id: "b", text: "懷疑是糖尿病或甲狀腺亢進，需抽血檢查", correct: true, feedback: "正確！「三多一少」(多吃多喝多尿、體重減少)是甲狀腺亢進或糖尿病的典型症狀。" },
                { id: "c", text: "餵食更多高熱量食物補回來", correct: false, feedback: "錯誤。在未確診前隨意改變飲食可能加重負擔(例如對腎臟或胰臟)。" }
            ]
        },
        {
            id: 3,
            species: "fish",
            patient: "小紅 (珠鱗金魚)",
            symptom: "小紅吃完飼料後，身體會不由自主地翻過來，浮在水面上，過一陣子才能潛下去。",
            options: [
                { id: "a", text: "這是牠在玩耍，不用理會", correct: false, feedback: "錯誤。魚類無法控制浮沉是嚴重的健康警訊。" },
                { id: "b", text: "可能是寄生蟲，整缸下重藥", correct: false, feedback: "錯誤。這是物理性浮力問題，亂下藥會破壞硝化系統，導致倒缸。" },
                { id: "c", text: "懷疑是「翻肚症(SBD)」，暫停餵食並改善水質", correct: true, feedback: "正確！圓身金魚常因消化不良壓迫魚鰾。禁食與餵食易消化的豌豆仁通常能改善。" }
            ]
        },
        {
            id: 4,
            species: "dog",
            patient: "樂樂 (拉不拉多, 2歲)",
            symptom: "偷吃了一整袋高純度的黑巧克力，現在出現異常興奮、嘔吐，心跳飆得非常快。",
            options: [
                { id: "a", text: "讓牠多喝水代謝掉就好", correct: false, feedback: "錯誤！黑巧克力含大量可可鹼，代謝極慢且具心臟毒性，喝水無效。" },
                { id: "b", text: "這是中毒急診，需立即催吐並給予活性碳", correct: true, feedback: "正確！巧克力中毒需在黃金時間內催吐，並使用活性碳吸附毒素，否則會癲癇甚至死亡。" },
                { id: "c", text: "給牠吃止吐藥讓牠舒服一點", correct: false, feedback: "錯誤！此時止吐會讓毒素繼續留在體內被吸收，這是在害牠！" }
            ]
        },
        {
            id: 5,
            species: "cat",
            patient: "橘子 (公橘貓, 5歲)",
            symptom: "頻繁進出砂盆蹲廁所，但都尿不出來，還會發出哀嚎聲。這兩天這隻貓特別焦慮。",
            options: [
                { id: "a", text: "可能是便秘，餵點化毛膏", correct: false, feedback: "錯誤。雖然動作像便秘，但配合哀嚎聲，這是典型的泌尿道問題。" },
                { id: "b", text: "觀察一晚，明天沒好再去醫院", correct: false, feedback: "錯誤！若是尿道阻塞，拖一晚可能導致膀胱破裂或急性腎衰竭死亡。" },
                { id: "c", text: "懷疑「尿道阻塞」，觸診膀胱是否腫脹", correct: true, feedback: "正確！公貓因尿道狹窄極易阻塞。這屬於分秒必爭的一級急診，需立即導尿。" }
            ]
        },
        {
            id: 6,
            species: "bird",
            patient: "乖乖 (玄鳳鸚鵡, 母)",
            symptom: "最近一直窩在籠底炸毛，呼吸有點急促，腹部明顯膨大，已經兩天沒有大便了。",
            options: [
                { id: "a", text: "懷疑是「卡蛋 (Egg Binding)」，需保溫並就醫", correct: true, feedback: "正確！母鳥鈣質不足或寒冷易導致難產。壓迫神經與器官會導致休克，極其危險。" },
                { id: "b", text: "牠只是在孵蛋，不要打擾牠", correct: false, feedback: "錯誤。正常的孵蛋不會呼吸急促或精神萎靡。" },
                { id: "c", text: "幫牠用力擠壓肚子把蛋擠出來", correct: false, feedback: "錯誤！絕對禁止！這樣會導致蛋在體內破裂，引發致命的腹膜炎。" }
            ]
        },
        {
            id: 7,
            species: "horse",
            patient: "閃電 (溫血馬, 8歲)",
            symptom: "這匹馬表現得很焦躁，不斷回頭看自己的肚子，還試圖在地上打滾。全身出汗明顯。",
            options: [
                { id: "a", text: "牠背部很癢，幫牠刷刷背", correct: false, feedback: "錯誤。回頭看肚子(Flank watching)是馬腹痛的典型肢體語言。" },
                { id: "b", text: "這是「腹痛 (Colic)」，需禁食並聽診腸音", correct: true, feedback: "正確！腹痛是馬的頭號殺手。打滾可能導致腸扭轉，需牽著馬散步防止牠躺下，並立刻找獸醫。" },
                { id: "c", text: "讓牠在草地上休息吃草", correct: false, feedback: "錯誤。腹痛時絕對要禁食水，以免增加腸胃負擔。" }
            ]
        },
        {
            id: 8,
            species: "dog",
            patient: "豆豆 (博美犬, 3歲)",
            symptom: "走路走到一半後腳會突然縮起來「三腳跳」，跳幾步後伸一伸腿又恢復正常行走。",
            options: [
                { id: "a", text: "膝蓋骨異位 (Patellar Luxation)", correct: true, feedback: "正確！小型犬常見遺傳疾病。膝蓋骨滑出滑車溝導致跛行，伸腿時又彈回去。" },
                { id: "b", text: "腳底踩到刺了", correct: false, feedback: "錯誤。異物刺傷通常會持續跛行，不會「突然好轉」。" },
                { id: "c", text: "髖關節發育不良 (CHD)", correct: false, feedback: "錯誤。CHD通常是大狗的問題，且症狀是起立困難或走路搖晃，較少呈現間歇性三腳跳。" }
            ]
        },
        {
            id: 9,
            species: "cat",
            patient: "斑斑 (米克斯, 7歲)",
            symptom: "偶爾會壓低身體、伸長脖子咳嗽，發出像鴨子叫的聲音。主人以為是想吐毛球但吐不出來。",
            options: [
                { id: "a", text: "可以餵更多化毛膏試試", correct: false, feedback: "錯誤。這不是消化道問題。如果化毛膏無效，就該懷疑其他原因。" },
                { id: "b", text: "這是貓氣喘 (Asthma) 的典型症狀", correct: true, feedback: "正確！貓氣喘常被誤認為吐毛球。需透過X光檢查肺部支氣管紋理來確診。" },
                { id: "c", text: "感冒了，吃人類的感冒藥", correct: false, feedback: "錯誤！人類感冒藥(如普拿疼)對貓是劇毒，一顆就能致死。" }
            ]
        },
        {
            id: 10,
            species: "fish",
            patient: "小黑 (孔雀魚)",
            symptom: "身上出現許多像灑了鹽巴一樣的小白點，而且會一直去摩擦魚缸的造景石頭。",
            options: [
                { id: "a", text: "這是「白點病」，需升溫並下藥", correct: true, feedback: "正確！這是纖毛蟲感染。白點蟲怕熱，升溫至28-30度配合藥物(如甲基藍)可有效治療。" },
                { id: "b", text: "這是正常的成長斑紋", correct: false, feedback: "錯誤。白點是凸起的囊包，並非花紋。" },
                { id: "c", text: "用手把白點摳掉就好", correct: false, feedback: "錯誤。這樣會造成魚體受傷感染，且水中的寄生蟲依然存在，治標不治本。" }
            ]
        },
        {
            id: 11,
            species: "dog",
            patient: "妞妞 (未結紮母狗, 8歲)",
            symptom: "最近喝水量暴增，精神變差，陰部流出像番茄醬一樣的紅褐色分泌物。",
            options: [
                { id: "a", text: "只是發情期的月經，觀察就好", correct: false, feedback: "錯誤。狗的發情分泌物應為鮮紅或淡粉紅，且精神不會變差。" },
                { id: "b", text: "開放型子宮蓄膿 (Open Pyometra)", correct: true, feedback: "正確！未結紮老狗的頭號殺手。細菌感染導致子宮化膿，需緊急手術切除子宮卵巢。" },
                { id: "c", text: "尿道感染，吃抗生素即可", correct: false, feedback: "錯誤。雖有頻尿症狀，但精神沈鬱與特定分泌物指向更嚴重的子宮問題。" }
            ]
        },
        {
            id: 12,
            species: "cat",
            patient: "小白 (波斯貓)",
            symptom: "一直用後腳抓耳朵，甩頭，耳道內有大量乾燥、黑褐色像咖啡渣的分泌物。",
            options: [
                { id: "a", text: "耳疥蟲感染 (Ear Mites)", correct: true, feedback: "正確！典型特徵就是黑褐色乾燥耳垢與劇癢。需使用殺蟲藥物治療。" },
                { id: "b", text: "細菌性外耳炎", correct: false, feedback: "錯誤。細菌性通常會有黃綠色膿樣分泌物且有臭味。" },
                { id: "c", text: "耳道長腫瘤", correct: false, feedback: "錯誤。腫瘤通常是單側發生，但也需排除。" }
            ]
        },
        {
            id: 13,
            species: "horse",
            patient: "大黑 (賽馬)",
            symptom: "突然不願意走路，站姿奇怪（重心後移），觸摸蹄壁發熱，腳像是黏在地上一樣。",
            options: [
                { id: "a", text: "扭傷腳踝，休息就好", correct: false, feedback: "錯誤。四隻腳都不願動且蹄壁發熱，非單純扭傷。" },
                { id: "b", text: "蹄葉炎 (Laminitis)", correct: true, feedback: "正確！馬的超级急診。蹄葉層發炎導致劇痛，嚴重會導致蹄骨穿出腳底，需立刻降溫與止痛。" },
                { id: "c", text: "馬只是累了", correct: false, feedback: "錯誤。馬不會因為累而呈現特定疼痛站姿。" }
            ]
        },
        {
            id: 14,
            species: "bird",
            patient: "小黃 (虎皮鸚鵡)",
            symptom: "嗉囊即使在空腹時摸起來也軟軟水水的，且呼氣有一股酸敗的味道，甚至會嘔吐。",
            options: [
                { id: "a", text: "嗉囊食滯 / 念珠菌感染 (Sour Crop)", correct: true, feedback: "正確！俗稱「酸嗉囊」。食物在嗉囊發酵無法下行，常見於幼鳥餵食不當或感染。" },
                { id: "b", text: "吃太飽，消化慢一點而已", correct: false, feedback: "錯誤。酸臭味代表食物已經腐敗發酵。" },
                { id: "c", text: "這是求偶吐料行為", correct: false, feedback: "錯誤。求偶吐料是有對象且興奮的，不會伴隨酸臭味與精神差。" }
            ]
        },
        {
            id: 15,
            species: "fish",
            patient: "鬥鬥 (泰國鬥魚)",
            symptom: "尾鰭邊緣開始破碎、變白，且有一點充血，看起來像破布一樣。",
            options: [
                { id: "a", text: "爛鰭病 (Fin Rot)", correct: true, feedback: "正確！通常由細菌(如柱狀病)引起，多因水質惡化。需改善水質並使用抗生素。" },
                { id: "b", text: "被其他魚咬傷", correct: false, feedback: "錯誤。若單獨飼養仍發生，且邊緣有白邊，為細菌感染特徵。" },
                { id: "c", text: "自然老化現象", correct: false, feedback: "錯誤。老化不會導致鰭條急性腐爛充血。" }
            ]
        },
        {
            id: 16,
            species: "dog",
            patient: "來福 (米格魯)",
            symptom: "突然發出像鵝叫的乾咳聲 (Honking cough)，尤其在興奮或拉牽繩時更明顯。",
            options: [
                { id: "a", text: "犬舍咳 (Kennel Cough)", correct: true, feedback: "正確！這是一種傳染性氣管支氣管炎，常見於群聚感染，會自癒或需抗生素治療。" },
                { id: "b", text: "心臟病引發的咳嗽", correct: false, feedback: "錯誤。心臟病咳通常是濕咳且在夜間嚴重。鵝叫聲更偏向氣管問題。" },
                { id: "c", text: "氣管塌陷", correct: false, feedback: "錯誤。雖然症狀相似，但氣管塌陷多見於小型犬(如約克夏)，米格魯較少見。" }
            ]
        },
        {
            id: 17,
            species: "cat",
            patient: "黑糖 (米克斯)",
            symptom: "眼睛瞇瞇的張不開，流很多眼淚，第三眼瞼紅腫跑出來，且有黃色眼屎。",
            options: [
                { id: "a", text: "結膜炎 (Conjunctivitis)", correct: true, feedback: "正確！常見原因包括皰疹病毒(FHV-1)或披衣菌感染。需點抗生素或抗病毒眼藥。" },
                { id: "b", text: "青光眼", correct: false, feedback: "錯誤。青光眼通常眼球會變大且角膜混濁，較少大量黃膿眼屎。" },
                { id: "c", text: "正常的睡眼惺忪", correct: false, feedback: "錯誤。黃膿眼屎絕對是感染徵兆。" }
            ]
        },
        {
            id: 18,
            species: "dog",
            patient: "皮皮 (吉娃娃幼犬 2個月)",
            symptom: "玩到一半突然全身軟趴趴，牙齦發白，在發抖，意識不清。",
            options: [
                { id: "a", text: "低血糖 (Hypoglycemia)", correct: true, feedback: "正確！小型玩賞幼犬體脂少，空腹太久或玩太瘋極易低血糖休克。需立刻補充糖水。" },
                { id: "b", text: "癲癇發作", correct: false, feedback: "錯誤。癲癇通常會有划水動作或僵直，軟趴趴較像虛脫。" },
                { id: "c", text: "睡著了", correct: false, feedback: "錯誤。喚不醒且牙齦發白是急症。" }
            ]
        },
        {
            id: 19,
            species: "horse",
            patient: "小白 (迷你馬)",
            symptom: "吃完蘋果後突然伸長脖子，大量流口水，甚至有飼料混著口水從鼻孔流出來。",
            options: [
                { id: "a", text: "食道阻塞 (Choke)", correct: true, feedback: "正確！馬無法嘔吐，食團卡在食道會導致唾液與食物逆流至鼻腔。需獸醫插管沖洗。" },
                { id: "b", text: "感冒流鼻涕", correct: false, feedback: "錯誤。感冒不會有飼料從鼻孔流出，且發作不會如此突然。" },
                { id: "c", text: "狂犬病", correct: false, feedback: "錯誤。雖有流口水，但狂犬病會有神經症狀且病程不同。" }
            ]
        },
        {
            id: 20,
            species: "bird",
            patient: "灰灰 (非洲灰鸚鵡)",
            symptom: "翅膀上一根新長出來的羽毛折斷了，血流不止，鳥看起來很驚慌。",
            options: [
                { id: "a", text: "斷血羽 (Broken Blood Feather)", correct: true, feedback: "正確！新生羽管充滿血液。如同水管破裂，必須將整根羽管拔除才能止血。" },
                { id: "b", text: "用OK繃貼起來就好", correct: false, feedback: "錯誤。羽毛會持續晃動導致傷口無法癒合，必須拔除。" },
                { id: "c", text: "這是換羽正常現象", correct: false, feedback: "錯誤。換羽不會流血。" }
            ]
        },
        {
            id: 21,
            species: "dog",
            patient: "大頭 (鬥牛犬)",
            symptom: "身上出現一個圓形的紅腫塊，忽大忽小，抓它之後會變更紅腫 (Darier's sign)。",
            options: [
                { id: "a", text: "肥大細胞瘤 (Mast Cell Tumor)", correct: true, feedback: "正確！這是一種惡性皮膚瘤。抓揉會導致組織胺釋放引起紅腫(去顆粒化)。需大範圍切除。" },
                { id: "b", text: "被蚊子叮", correct: false, feedback: "錯誤。蚊子叮不會忽大忽小持續很久。" },
                { id: "c", text: "脂肪瘤", correct: false, feedback: "錯誤。脂肪瘤通常觸感柔軟且不會因抓揉而紅腫。" }
            ]
        },
        {
            id: 22,
            species: "fish",
            patient: "錦鯉",
            symptom: "身體表面覆蓋一層灰濛濛的白色薄膜，看起來像絲絨一樣，且會磨蹭池壁。",
            options: [
                { id: "a", text: "胡椒病 / 絲絨病 (Velvet Disease)", correct: true, feedback: "正確！由卵圓鞭毛蟲引起。看起來像撒了金粉或白霧。需遮光並用藥物治療。" },
                { id: "b", text: "正常的黏膜分泌", correct: false, feedback: "錯誤。過度分泌黏膜代表受到刺激。" },
                { id: "c", text: "水太濁了", correct: false, feedback: "錯誤。這是魚體表面的病徵，非水質問題。" }
            ]
        },
        {
            id: 23,
            species: "dog",
            patient: "黃金 (老狗)",
            symptom: "後腳無力，無法起身，檢查發現後腳膝蓋可以向像抽屜一樣前後移動。",
            options: [
                { id: "a", text: "前十字韌帶斷裂 (CCL Rupture)", correct: true, feedback: "正確！「抽屜試驗」陽性是診斷十字韌帶斷裂的黃金標準。需手術(如TPLO)治療。" },
                { id: "b", text: "髖關節脫臼", correct: false, feedback: "錯誤。髖關節問題會在臀部，而非膝蓋的抽屜運動。" },
                { id: "c", text: "骨刺", correct: false, feedback: "錯誤。骨刺是慢性疼痛，極少導致關節異常位移。" }
            ]
        },
        {
            id: 24,
            species: "cat",
            patient: "跳跳 (住在10樓的貓)",
            symptom: "從窗戶不小心掉下去，現在下巴流血，氣喘吁吁，前腳好像骨折了。",
            options: [
                { id: "a", text: "高樓症候群 (High-Rise Syndrome)", correct: true, feedback: "正確！貓墜樓常見「下巴裂開、氣胸、四肢骨折」三聯徵。需優先處理氣胸與休克。" },
                { id: "b", text: "貓有九條命，擦藥就好", correct: false, feedback: "錯誤！內出血與氣胸可能在數小時內致命。" },
                { id: "c", text: "立刻幫牠洗澡安撫情緒", correct: false, feedback: "錯誤！絕對禁止。這會增加其緊迫導致死亡。" }
            ]
        },
        {
            id: 25,
            species: "horse",
            patient: "馬",
            symptom: "在潮濕多雨的季節，背部皮膚出現整片的結痂，毛一拔就掉，底下皮膚紅紅的。",
            options: [
                { id: "a", text: "雨腐病 (Rain Rot)", correct: true, feedback: "正確！由嗜皮菌 (Dermatophilus) 引起的細菌感染。需保持乾燥並使用抗菌洗劑。" },
                { id: "b", text: "曬傷", correct: false, feedback: "錯誤。曬傷通常在淺色毛髮區域，不會結厚痂。" },
                { id: "c", text: "馬蠅叮咬", correct: false, feedback: "錯誤。馬蠅會造成局部腫塊，而非大面積脫毛結痂。" }
            ]
        },
        {
            id: 26,
            species: "dog",
            patient: "拉拉",
            symptom: "突然抽全身抽搐、口吐白沫、四肢划水，持續了約2分鐘。",
            options: [
                { id: "a", text: "癲癇大發作 (Grand Mal Seizure)", correct: true, feedback: "正確！發作時切勿將手伸入口中。若持續超過5分鐘(重積狀態)需立即就醫。" },
                { id: "b", text: "做惡夢", correct: false, feedback: "錯誤。惡夢可以被叫醒，癲癇無法。" },
                { id: "c", text: "被毒蛇咬", correct: false, feedback: "錯誤。毒蛇咬通常伴隨局部腫脹劇痛，不會單純表現為抽搐。" }
            ]
        },
        {
            id: 27,
            species: "cat",
            patient: "小花 (幼貓)",
            symptom: "身上有圓形的脫毛區，周圍皮膚紅紅的，主人手臂上也出現類似的紅圈圈且很癢。",
            options: [
                { id: "a", text: "貓癬 (Ringworm)", correct: true, feedback: "正確！這是人畜共通的皮黴菌感染。幼貓與免疫力低者易感。" },
                { id: "b", text: "跳蚤過敏", correct: false, feedback: "錯誤。跳蚤通常在尾根部造成脫毛，且不會在人身上形成圓圈紅斑。" },
                { id: "c", text: "營養不良", correct: false, feedback: "錯誤。傳染給人是關鍵鑑別點。" }
            ]
        },
        {
            id: 28,
            species: "fish",
            patient: "新設缸的金魚",
            symptom: "魚鰭充血，大口呼吸，且全部浮在水面。測量水質發現氨(NH3)濃度很高。",
            options: [
                { id: "a", text: "新缸症候群 (New Tank Syndrome)", correct: true, feedback: "正確！硝化系統尚未建立，劇毒的氨無法被分解。需大量換水並添加硝化菌。" },
                { id: "b", text: "缺氧，打氣就好", correct: false, feedback: "錯誤。雖缺氧是症狀之一，但根本原因是氨毒害鰓部。" },
                { id: "c", text: "天氣太熱", correct: false, feedback: "錯誤。氨中毒是新缸最常見死因。" }
            ]
        },
        {
            id: 29,
            species: "dog",
            patient: "哈士奇",
            symptom: "從幾天前開始不吃東西，持續嘔吐，今天連喝水都吐。摸肚子會痛。",
            options: [
                { id: "a", text: "腸胃異物阻塞 (Foreign Body)", correct: true, feedback: "正確！持續嘔吐且連水都喝不下是典型阻塞症狀。需X光或超音波確診。" },
                { id: "b", text: "一般腸胃炎", correct: false, feedback: "錯誤。一般腸胃炎通常會間歇性，完全喝水即吐高度懷疑阻塞。" },
                { id: "c", text: "挑食", correct: false, feedback: "錯誤。挑食不會嘔吐。" }
            ]
        },
        {
            id: 30,
            species: "cat",
            patient: "老貓",
            symptom: "脖子背側打針的地方出現一個硬塊，幾個月了都沒消，反而變大。",
            options: [
                { id: "a", text: "貓注射部位肉瘤 (FISS)", correct: true, feedback: "正確！貓對發炎反應敏感，注射疫苗或藥物可能誘發惡性腫瘤。需大範圍切除。" },
                { id: "b", text: "膿包", correct: false, feedback: "錯誤。膿包通常會破潰流膿且有熱痛感。" },
                { id: "c", text: "胖而已", correct: false, feedback: "錯誤。局部硬塊需嚴肅看待，依照 3-2-1 法則監控。" }
            ]
        },
        {
            id: 31,
            species: "bird",
            patient: "金剛鸚鵡",
            symptom: "在廚房如果不小心燒焦了不沾鍋，鳥突然掉到籠底呼吸困難死亡。",
            options: [
                { id: "a", text: "鐵氟龍中毒 (Teflon Toxicity)", correct: true, feedback: "正確！不沾鍋塗層(PTFE)高溫分解產生氣體，對鳥類呼吸系統有劇毒，致死率極高。" },
                { id: "b", text: "嚇死的", correct: false, feedback: "錯誤。" },
                { id: "c", text: "心臟病發", correct: false, feedback: "錯誤。這是非常典型的吸入性中毒案例。" }
            ]
        },
        {
            id: 32,
            species: "dog",
            patient: "法鬥 (夏天中午散步)",
            symptom: "散步回來後倒地不起，舌頭發紫，體溫飆高到41度，喘個不停。",
            options: [
                { id: "a", text: "熱衰竭 / 中暑 (Heat Stroke)", correct: true, feedback: "正確！短吻犬散熱極差。需迅速降溫(潑水吹風)並就醫，否則會多重器官衰竭。" },
                { id: "b", text: "太累了睡一下就好", correct: false, feedback: "錯誤！這是致死急診。" },
                { id: "c", text: "氣喘發作", correct: false, feedback: "錯誤。這是體溫調節失敗。" }
            ]
        },
        {
            id: 33,
            species: "fish",
            patient: "金魚",
            symptom: "體表寄生了一條像針一樣的蟲，拔掉的地方會紅腫出血。",
            options: [
                { id: "a", text: "錨蟲 (Anchor Worm)", correct: true, feedback: "正確！這是一種甲殼類寄生蟲，頭部刺入魚體吸血。需夾除並使用除蟲藥。" },
                { id: "b", text: "水草", correct: false, feedback: "錯誤。水草不會刺入魚體。" },
                { id: "c", text: "魚骨頭刺出來", correct: false, feedback: "錯誤。這是外寄生蟲。" }
            ]
        },
        {
            id: 34,
            species: "dog",
            patient: "流浪狗",
            symptom: "眼睛有很多分泌物，腳掌的肉墊變得很硬很厚，且有神經抽搐症狀。",
            options: [
                { id: "a", text: "犬瘟熱 (Distemper)", correct: true, feedback: "正確！「硬蹠症」是犬瘟熱的特徵病變。病毒同時攻擊呼吸、消化與神經系統。" },
                { id: "b", text: "狂犬病", correct: false, feedback: "錯誤。" },
                { id: "c", text: "皮膚病", correct: false, feedback: "錯誤。單純皮膚病不會有神經症狀。" }
            ]
        },
        {
            id: 35,
            species: "horse",
            patient: "老馬",
            symptom: "沒有發燒，但持續咳嗽，流鼻涕，且用力呼氣時腹部肌肉會收縮(赫氣線)。",
            options: [
                { id: "a", text: "馬氣喘 / 阻塞性肺病 (RAO/Heaves)", correct: true, feedback: "正確！類似人類氣喘，對灰塵黴菌過敏。長期用力呼吸會導致腹肌肥大(Heave line)。" },
                { id: "b", text: "感冒", correct: false, feedback: "錯誤。感冒通常是急性的，RAO是慢性的。" },
                { id: "c", text: "肺癌", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 36,
            species: "bird",
            patient: "鸚鵡",
            symptom: "出現綠色水便，流鼻水，且最近剛從鳥店買回來。人也有點像感冒發燒。",
            options: [
                { id: "a", text: "鸚鵡熱 (Psittacosis)", correct: true, feedback: "正確！由披衣菌引起的人畜共通病。在鳥會有呼吸與消化症狀，在人會引起肺炎。" },
                { id: "b", text: "單純拉肚子", correct: false, feedback: "錯誤。人同時生病需高度警覺共通傳染病。" },
                { id: "c", text: "寄生蟲", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 37,
            species: "dog",
            patient: "西施犬",
            symptom: "眼睛很多黃綠色眼屎，眼白紅紅的，眼角膜看起來乾乾的不反光。",
            options: [
                { id: "a", text: "乾眼症 (KCS)", correct: true, feedback: "正確！淚液分泌不足導致。需終身點眼藥膏(如Ciclosporin)治療，否則會失明。" },
                { id: "b", text: "細菌感染，點抗生素就好", correct: false, feedback: "錯誤。抗生素治標不治本，缺水才是主因。" },
                { id: "c", text: "白內障", correct: false, feedback: "錯誤。白內障是水晶體混濁，乾眼症是角膜表面病變。" }
            ]
        },
        {
            id: 38,
            species: "cat",
            patient: "未打疫苗的幼貓",
            symptom: "突然又吐又拉，發燒，且拉出來的便便有非常重的血腥味，貓極度虛弱。",
            options: [
                { id: "a", text: "貓瘟 (Panleukopenia)", correct: true, feedback: "正確！由貓小病毒引起，致死率極高。特徵是白血球嚴重低下與出血性腸炎。" },
                { id: "b", text: "吃壞肚子", correct: false, feedback: "錯誤。一般腸胃炎不會如此猛烈且有特異腥臭味。" },
                { id: "c", text: "胰臟炎", correct: false, feedback: "錯誤。雖症狀相似，但幼貓群聚感染首先懷疑傳染病。" }
            ]
        },
        {
            id: 39,
            species: "dog",
            patient: "拳師犬",
            symptom: "眼頭內側跑出一塊紅紅的肉球，看起來像掛了一顆櫻桃。",
            options: [
                { id: "a", text: "櫻桃眼 (Cherry Eye)", correct: true, feedback: "正確！第三眼瞼腺體脫出。需手術復位，不建議切除以免引發乾眼症。" },
                { id: "b", text: "腫瘤", correct: false, feedback: "錯誤。這特定的位置與外觀是典型的櫻桃眼。" },
                { id: "c", text: "眼睛撞到瘀血", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 40,
            species: "cat",
            patient: "貓",
            symptom: "一隻瞳孔大一隻瞳孔小 (大小眼)，且小瞳孔那邊的第三眼瞼突出，上眼瞼下垂。",
            options: [
                { id: "a", text: "霍納氏症候群 (Horner's Syndrome)", correct: true, feedback: "正確！交感神經受損導致的特徵：縮瞳、眼瞼下垂、眼球內陷、第三眼瞼脫出。" },
                { id: "b", text: "中風", correct: false, feedback: "錯誤。" },
                { id: "c", text: "結膜炎", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 41,
            species: "fish",
            patient: "七彩神仙魚",
            symptom: "頭部出現凹洞，且裡面有白色膿樣物質流出，魚變得很瘦。",
            options: [
                { id: "a", text: "頭洞病 (Hole-in-the-Head)", correct: true, feedback: "正確！通常由六鞭毛蟲(Hexamita)引起，與營養不良或水質差有關。" },
                { id: "b", text: "撞傷", correct: false, feedback: "錯誤。撞傷不會形成對稱性且流膿的凹洞。" },
                { id: "c", text: "白點病", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 42,
            species: "dog",
            patient: "黃金獵犬",
            symptom: "越來越胖，毛髮稀疏且皮膚黑黑的，喜歡趴在冷的地方，心跳很慢。",
            options: [
                { id: "a", text: "甲狀腺功能低下 (Hypothyroidism)", correct: true, feedback: "正確！大型犬常見內分泌疾病。代謝變慢導致肥胖、對稱性脫毛與呆滯。" },
                { id: "b", text: "吃太好", correct: false, feedback: "錯誤。伴隨皮膚病變與心跳慢，非單純肥胖。" },
                { id: "c", text: "庫興氏症", correct: false, feedback: "錯誤。庫興氏症通常會有「多喝多尿」，甲狀腺低下則無。" }
            ]
        },
        {
            id: 43,
            species: "cat",
            patient: "流浪貓",
            symptom: "流口水，嘴巴很痛不敢吃東西，檢查發現舌頭上有好幾個潰瘍傷口。",
            options: [
                { id: "a", text: "卡里西病毒 (Calicivirus)", correct: true, feedback: "正確！貓上呼吸道感染病原之一，特徵就是口腔與舌頭潰瘍，極度疼痛。" },
                { id: "b", text: "咬到舌頭", correct: false, feedback: "錯誤。不會有多發性潰瘍。" },
                { id: "c", text: "牙周病", correct: false, feedback: "錯誤。牙周病是牙齦發炎，非舌頭潰瘍。" }
            ]
        },
        {
            id: 44,
            species: "bird",
            patient: "雞 / 鴨 (掌狀水禽)",
            symptom: "腳底中間長了一個大膿包，走路一跛一跛的。",
            options: [
                { id: "a", text: "禽掌炎 (Bumblefoot)", correct: true, feedback: "正確！因棲木不當或地面粗糙導致腳底感染，嚴重會骨髓炎。" },
                { id: "b", text: "腫瘤", correct: false, feedback: "錯誤。" },
                { id: "c", text: "痛風", correct: false, feedback: "錯誤。痛風通常是關節腫脹，非腳底膿包。" }
            ]
        },
        {
            id: 45,
            species: "dog",
            patient: "雪納瑞",
            symptom: "背上出現很多像粉刺一樣的小黑點，雖然不癢但洗不掉。",
            options: [
                { id: "a", text: "雪納瑞粉刺症候群 (Schnauzer Comedo Syndrome)", correct: true, feedback: "正確！這是一種毛囊角化異常，專屬於雪納瑞的遺傳性皮膚問題。" },
                { id: "b", text: "跳蚤大便", correct: false, feedback: "錯誤。跳蚤大便遇水會化開變紅血色，粉刺不會。" },
                { id: "c", text: "黴菌感染", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 46,
            species: "horse",
            patient: "馬",
            symptom: "發燒，貧血，且在馬蠅季節發生，檢查報告顯示Coggins Test陽性。",
            options: [
                { id: "a", text: "馬傳染性貧血 (EIA)", correct: true, feedback: "正確！這是法定傳染病，無藥可醫。陽性馬匹通常需人道處置或終身隔離。" },
                { id: "b", text: "營養不良性貧血", correct: false, feedback: "錯誤。" },
                { id: "c", text: "寄生蟲", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 47,
            species: "cat",
            patient: "摺耳貓",
            symptom: "尾巴變得僵硬不能彎曲，走路像踩高蹺，關節摸起來腫大。",
            options: [
                { id: "a", text: "軟骨發育不全 (Osteochondrodysplasia)", correct: true, feedback: "正確！摺耳貓的基因缺陷會導致全身軟骨病變與骨質增生，這是一輩子的痛苦。" },
                { id: "b", text: "關節炎", correct: false, feedback: "正確但不够精確。這是基因導致的嚴重骨病變。" },
                { id: "c", text: "骨折", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 48,
            species: "dog",
            patient: "德國狼犬",
            symptom: "後腳走路無力，腳背著地拖行 (拖腳)，指甲都磨平了。",
            options: [
                { id: "a", text: "退化性脊髓神經病變 (DM)", correct: true, feedback: "正確！好發於狼犬的老年神經疾病，導致漸進式後肢癱瘓，類似人類的ALS。" },
                { id: "b", text: "懶得走路", correct: false, feedback: "錯誤。" },
                { id: "c", text: "腳底刺到東西", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 49,
            species: "fish",
            patient: "孔雀魚",
            symptom: "身體鱗片全部豎起來，看起來像松果一樣，肚子還有點腹水。",
            options: [
                { id: "a", text: "立鱗病 / 松果病 (Dropsy)", correct: true, feedback: "正確！代表嚴重的體內積水與細菌感染導致腎衰竭，治癒率極低。" },
                { id: "b", text: "吃太飽", correct: false, feedback: "錯誤。" },
                { id: "c", text: "懷孕", correct: false, feedback: "錯誤。懷孕肚子大但不會立鱗。" }
            ]
        },
        {
            id: 50,
            species: "dog",
            patient: "可卡犬",
            symptom: "耳朵很長，蓋住耳道，裡面紅腫發炎且有綠膿。",
            options: [
                { id: "a", text: "綠膿桿菌感染 (Pseudomonas)", correct: true, feedback: "正確！抗藥性強的細菌，常發生在慢性耳炎。分泌物呈黃綠色膿樣。" },
                { id: "b", text: "耳垢太多", correct: false, feedback: "錯誤。" },
                { id: "c", text: "黴菌感染", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 51,
            species: "dog",
            patient: "邊境牧羊犬",
            symptom: "因為偷吃了一串葡萄，現在出現急性腎衰竭症狀（無尿、嘔吐）。",
            options: [
                { id: "a", text: "葡萄/葡萄乾中毒", correct: true, feedback: "正確！葡萄對狗均有腎毒性，且劑量與個體感受性無關，一顆都可能致死。" },
                { id: "b", text: "腸胃炎", correct: false, feedback: "錯誤。葡萄導致的是腎臟實質損傷，非單純腸胃問題。" },
                { id: "c", text: "糖尿病", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 52,
            species: "cat",
            patient: "暹羅貓",
            symptom: "一直發出像嬰兒哭聲的嚎叫，過度舔毛把肚子的毛都舔光了，對陌生人極度恐懼。",
            options: [
                { id: "a", text: "貓知覺過敏症 (Feline Hyperesthesia)", correct: true, feedback: "正確！又稱「波浪背」。這是一種神經/強迫症行為，背部肌肉會像波浪般抽動。" },
                { id: "b", text: "皮膚長蚤", correct: false, feedback: "錯誤。知覺過敏的特徵是精神行為改變與背部抽動。" },
                { id: "c", text: "發情", correct: false, feedback: "錯誤。若已結紮則排除。" }
            ]
        },
        {
            id: 53,
            species: "rabbit",
            patient: "波波 (獅子兔)",
            symptom: "已經 12 小時沒有大便，不吃草，且肚子摸起來硬硬的，縮在角落磨牙。",
            options: [
                { id: "a", text: "腸胃停滯 (GI Stasis)", correct: true, feedback: "正確！兔子的頭號急診。若不立即灌食草粉與給予腸胃藥，會因肝衰竭死亡。" },
                { id: "b", text: "毛球症", correct: false, feedback: "這通常是GI Stasis的結果而非主因。核心問題是腸蠕動停止。" },
                { id: "c", text: "便秘餵化毛膏", correct: false, feedback: "錯誤。這不是單純便秘，是致死性的代謝問題。" }
            ]
        },
        {
            id: 54,
            species: "dog",
            patient: "約克夏",
            symptom: "呼吸時發出很大的「鵝叫聲」，尤其是興奮或被抱起來壓到氣管時。",
            options: [
                { id: "a", text: "氣管塌陷 (Tracheal Collapse)", correct: true, feedback: "正確！小型犬常見氣管軟骨軟化，呈現扁平狀。需使用胸背帶並控制體重。" },
                { id: "b", text: "感冒", correct: false, feedback: "錯誤。這是結構問題，長期存在的。" },
                { id: "c", text: "心臟病", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 55,
            species: "turtle",
            patient: "小龜 (巴西龜)",
            symptom: "一直側著漂浮在水面無法下潛，且會張嘴呼吸。",
            options: [
                { id: "a", text: "肺炎 (Pneumonia)", correct: true, feedback: "正確！肺部感染積液導致兩側浮力不均（側浮）。需施打抗生素並加溫。" },
                { id: "b", text: "腸胃炎", correct: false, feedback: "錯誤。" },
                { id: "c", text: "在曬太陽", correct: false, feedback: "錯誤。長時間無法下潛即為病態。" }
            ]
        },
        {
            id: 56,
            species: "horse",
            patient: "賽馬",
            symptom: "下顎淋巴結腫大破潰流膿，發高燒，流濃鼻涕，具高度傳染性。",
            options: [
                { id: "a", text: "腺疫 (Strangles)", correct: true, feedback: "正確！由馬鏈球菌引起，因淋巴腫大壓迫呼吸道如被勒頸而得名。" },
                { id: "b", text: "馬流感", correct: false, feedback: "錯誤。流感通常是病毒性，不會造成淋巴結化膿破裂。" },
                { id: "c", text: "牙齒發炎", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 57,
            species: "fish",
            patient: "神仙魚",
            symptom: "眼球凸出 (凸眼)，眼眶周圍充血，且肚子也很大。",
            options: [
                { id: "a", text: "凸眼病 (Pop-eye)", correct: true, feedback: "正確！通常是細菌性感染合併腹水(內臟受損)的末期表現。" },
                { id: "b", text: "撞到玻璃", correct: false, feedback: "錯誤。單眼可能為撞傷，雙眼凸出多為全身性感染。" },
                { id: "c", text: "凸眼基因", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 58,
            species: "cat",
            patient: "肥胖貓",
            symptom: "因為飼主出國三天沒吃飯，或是突然不吃東西，幾天後皮膚跟眼睛變黃。",
            options: [
                { id: "a", text: "脂肪肝 (Hepatic Lipidosis)", correct: true, feedback: "正確！胖貓絕食會動員大量脂肪到肝臟堆積，導致肝衰竭。需放置鼻胃管強迫灌食。" },
                { id: "b", text: "傳染性腹膜炎", correct: false, feedback: "錯誤。" },
                { id: "c", text: "膽結石", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 59,
            species: "dog",
            patient: "古代牧羊犬",
            symptom: "在使用 Ivermectin 驅蟲後，突然出現走路搖晃、流口水、瞳孔放大甚至昏迷。",
            options: [
                { id: "a", text: "MDR1 基因缺陷中毒", correct: true, feedback: "正確！牧羊犬系常缺乏將藥物幫浦出腦部的蛋白，導致神經毒性。需基因檢測確認。" },
                { id: "b", text: "藥物過敏", correct: false, feedback: "錯誤。這是基因代謝缺陷。" },
                { id: "c", text: "中暑", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 60,
            species: "hedgehog",
            patient: "刺刺 (刺蝟)",
            symptom: "一直抓癢，掉刺，皮膚有皮屑，顯微鏡下看到會動的蟲。",
            options: [
                { id: "a", text: "疥癬蟲 (Mites)", correct: true, feedback: "正確！刺蝟最常見的皮膚病，嚴重會導致嚴重脫刺與貧血。" },
                { id: "b", text: "黴菌", correct: false, feedback: "錯誤。黴菌不會動。" },
                { id: "c", text: "換刺期", correct: false, feedback: "錯誤。換刺不會劇癢。" }
            ]
        },
        {
            id: 61,
            species: "dog",
            patient: "黃金獵犬",
            symptom: "突然腹部極度膨大，乾嘔吐不出東西，虛弱，敲腹部有鼓聲。",
            options: [
                { id: "a", text: "胃擴張扭轉 (GDV)", correct: true, feedback: "正確！第一級外科急診。胃扭轉會阻斷血流，需立即洩氣並手術固定胃部。" },
                { id: "b", text: "吃太飽", correct: false, feedback: "錯誤。乾嘔與急性膨大是關鍵。" },
                { id: "c", text: "腹水", correct: false, feedback: "錯誤。腹水是波動感，氣體則是鼓音。" }
            ]
        },
        {
            id: 62,
            species: "cat",
            patient: "老貓",
            symptom: "沿著脊椎或頸部摸到小腫塊，切片報告顯示為「注射部位肉瘤 (FISS)」。",
            options: [
                { id: "a", text: "預後不佳，需大範圍切除", correct: true, feedback: "正確！這種腫瘤像章魚腳般侵襲，需切除腫塊邊緣外3-5公分，甚至截肢。" },
                { id: "b", text: "良性腫瘤，切除就好", correct: false, feedback: "錯誤。這是惡性度極高的腫瘤。" },
                { id: "c", text: "追蹤觀察", correct: false, feedback: "錯誤。會快速長大。" }
            ]
        },
        {
            id: 63,
            species: "bird",
            patient: "金絲雀",
            symptom: "腳上長了許多灰白色的痂皮，看起來像穿了石灰鞋子，鳥會一直啄腳。",
            options: [
                { id: "a", text: "膝蟎 / 疥癬 (Scaly Leg Mites)", correct: true, feedback: "正確！由Knemidocoptes蟎蟲引起，會鑽入鱗片下造成過度角化。" },
                { id: "b", text: "黴菌感染", correct: false, feedback: "錯誤。" },
                { id: "c", text: "痛風", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 64,
            species: "dog",
            patient: "比熊犬",
            symptom: "再吃了高油脂的大餐後，出現劇烈嘔吐與前腹痛(祈禱姿勢)，血檢 Lipase 超標。",
            options: [
                { id: "a", text: "急性胰臟炎 (Pancreatitis)", correct: true, feedback: "正確！高脂飲食是誘發因子。需暫停進食水(視情況)、輸液與止痛。" },
                { id: "b", text: "腸胃炎", correct: false, feedback: "錯誤。祈禱姿勢與Lipase升高指向胰臟。" },
                { id: "c", text: "肝衰竭", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 65,
            species: "reptile",
            patient: "綠鬣蜥 (Iggy)",
            symptom: "尾巴末壞死變黑，身體其他部位也有黑色潰瘍斑點。",
            options: [
                { id: "a", text: "壞死性皮膚炎 (Scale Rot)", correct: true, feedback: "正確！通常因環境過於潮濕髒亂導致細菌感染。需清創與抗生素。" },
                { id: "b", text: "脫皮不全", correct: false, feedback: "錯誤。" },
                { id: "c", text: "曬傷", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 66,
            species: "horse",
            patient: "馬",
            symptom: "眼睛角膜上有一個不會癒合的傷口，周圍有絮狀邊緣，螢光染色陽性。",
            options: [
                { id: "a", text: "黴菌性角膜潰瘍", correct: true, feedback: "正確！馬(尤其在馬廄)極易受真菌感染眼部，治療非常困難，需抗黴菌藥。" },
                { id: "b", text: "單純刮傷", correct: false, feedback: "錯誤。久不癒合且有絮狀邊緣暗示黴菌。" },
                { id: "c", text: "青光眼", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 67,
            species: "fish",
            patient: "金魚",
            symptom: "魚體翻轉，且拉出長長一條白色的便便 (拖白便)。",
            options: [
                { id: "a", text: "體內寄生蟲 (如六鞭毛蟲)", correct: true, feedback: "正確！白色空心便便是腸道寄生蟲造成黏膜剝落的特徵。" },
                { id: "b", text: "吃太飽", correct: false, feedback: "錯誤。" },
                { id: "c", text: "一般的腸胃炎", correct: false, feedback: "錯誤。便便型態是關鍵。" }
            ]
        },
        {
            id: 68,
            species: "dog",
            patient: "巴哥犬",
            symptom: "眼睛突然受傷，眼球整個掉出眼眶 (Proptosis)。",
            options: [
                { id: "a", text: "眼球脫出急診", correct: true, feedback: "正確！短吻犬眼窩淺，受撞擊易脫出。需保持眼球濕潤並立刻手術復位。" },
                { id: "b", text: "大力塞回去就好", correct: false, feedback: "錯誤！需在麻醉下小心復位，否則會造成永久損傷。" },
                { id: "c", text: "點眼藥水觀察", correct: false, feedback: "錯誤！這是外科急診。" }
            ]
        },
        {
            id: 69,
            species: "cat",
            patient: "公貓",
            symptom: "導尿後，現在可以尿尿了，但尿液顏色是很深的咖啡色/醬油色。",
            options: [
                { id: "a", text: "肌紅素尿 / 溶血", correct: true, feedback: "正確！膀胱過度膨脹導致出血與組織壞死。需大量輸液代謝以免腎衰竭。" },
                { id: "b", text: "正常的尿", correct: false, feedback: "錯誤。" },
                { id: "c", text: "膽汁入尿", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 70,
            species: "mouse",
            patient: "倉鼠",
            symptom: "屁股濕濕髒髒的，尾巴區域沾滿軟便，精神很差 (Wet Tail)。",
            options: [
                { id: "a", text: "增生性迴腸炎 (Wet Tail)", correct: true, feedback: "正確！由細菌引起的嚴重腸炎，好發於幼年或壓力大的倉鼠，致死率高。" },
                { id: "b", text: "只是拉肚子", correct: false, feedback: "錯誤。濕尾症是致死性疾病的俗稱。" },
                { id: "c", text: "尿床", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 71,
            species: "dog",
            patient: "馬爾濟斯",
            symptom: "心臟聽診有雜音，且半夜容易咳嗽，運動不耐，X光顯示心臟變大。",
            options: [
                { id: "a", text: "二尖瓣逆流 (MMVD)", correct: true, feedback: "正確！小型老犬極常見的心臟病。瓣膜退化導致血液逆流，造成肺水腫。" },
                { id: "b", text: "心絲蟲", correct: false, feedback: "錯誤。雖也有可能，但小型老犬機率最高的是瓣膜疾病。" },
                { id: "c", text: "氣管塌陷", correct: false, feedback: "錯誤。雜音指向心臟。" }
            ]
        },
        {
            id: 72,
            species: "cat",
            patient: "幼貓",
            symptom: "眼睛被眼屎黏住張不開，打噴嚏，舌頭沒潰瘍。",
            options: [
                { id: "a", text: "貓皰疹病毒 (FHV-1)", correct: true, feedback: "正確！最常見的貓感冒病原，病毒潛伏在神經節，壓力大時會復發。" },
                { id: "b", text: "卡里西病毒", correct: false, feedback: "錯誤。卡里西通常伴隨舌頭潰瘍與跛行。" },
                { id: "c", text: "過敏", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 73,
            species: "bird",
            patient: "鸚鵡",
            symptom: "一直打噴嚏，鼻孔周圍髒髒的，且眼睛紅腫 (單側或雙側)。",
            options: [
                { id: "a", text: "鸚鵡熱 / 支原體感染", correct: true, feedback: "正確！上呼吸道感染的典型症狀。需使用 Doxycycline 等抗生素。" },
                { id: "b", text: "鼻孔進水", correct: false, feedback: "錯誤。" },
                { id: "c", text: "過敏", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 74,
            species: "dog",
            patient: "羅威那",
            symptom: "右前腳跛行，X光顯示骨頭上有「蟲蝕樣 (Moth-eaten)」的溶解影像，且很痛。",
            options: [
                { id: "a", text: "骨肉瘤 (Osteosarcoma)", correct: true, feedback: "正確！大型犬常見的原發性骨腫瘤，極度疼痛且易轉移至肺臟。" },
                { id: "b", text: "骨折", correct: false, feedback: "錯誤。骨折線是俐落的，蟲蝕樣是腫瘤特徵。" },
                { id: "c", text: "關節炎", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 75,
            species: "sugar_glider",
            patient: "蜜袋鼯",
            symptom: "後腳無力拖行，發抖，因為長期只吃水果與果凍。",
            options: [
                { id: "a", text: "代謝性骨病 (MBD) / 缺鈣", correct: true, feedback: "正確！水果含磷量高鈣質低，導致身體從骨頭抽鈣，造成後肢癱瘓。" },
                { id: "b", text: "摔傷", correct: false, feedback: "錯誤。飲食史是關鍵。" },
                { id: "c", text: "中風", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 76,
            species: "horse",
            patient: "馬",
            symptom: "馬蹄的蹄叉 (Frog) 部位發出惡臭，有黑色爛泥狀的物質。",
            options: [
                { id: "a", text: "蹄叉腐爛 (Thrush)", correct: true, feedback: "正確！馬廄潮濕骯髒導致厭氧菌感染。需清潔環境並使用乾燥劑。" },
                { id: "b", text: "踩到大便", correct: false, feedback: "錯誤。這是組織腐爛的味道。" },
                { id: "c", text: "蹄葉炎", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 77,
            species: "fish",
            patient: "孔雀魚",
            symptom: "脊椎彎曲變形 (S型)，且越來越瘦 (Knife back)。",
            options: [
                { id: "a", text: "魚結核病 (Fish TB)", correct: true, feedback: "正確！由分枝桿菌引起，人畜共通(游泳池肉芽腫)。無藥可醫，需淘汰病魚。" },
                { id: "b", text: "營養不良", correct: false, feedback: "錯誤。結核病的脊椎變形是典型的。" },
                { id: "c", text: "老了", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 78,
            species: "dog",
            patient: "未打疫苗幼犬",
            symptom: "出現神經症狀(抽搐)，鼻頭與腳掌角質化變厚 (Hard pad)。",
            options: [
                { id: "a", text: "犬瘟熱 (Distemper)", correct: true, feedback: "正確！硬蹠症是犬瘟熱中後期的典型病徵。" },
                { id: "b", text: "狂犬病", correct: false, feedback: "錯誤。" },
                { id: "c", text: "黴菌感染", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 79,
            species: "cat",
            patient: "白貓",
            symptom: "耳朵邊緣出現潰瘍、結痂，切片顯示為鱗狀上皮細胞癌 (SCC)。",
            options: [
                { id: "a", text: "主要誘因是紫外線 (曬太陽)", correct: true, feedback: "正確！白貓缺乏黑色素保護，長期曝曬易患耳殼皮膚癌。需切除耳殼。" },
                { id: "b", text: "病毒感染", correct: false, feedback: "錯誤。" },
                { id: "c", text: "抓傷", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 80,
            species: "dog",
            patient: "臘腸犬",
            symptom: "突然慘叫一聲後，後腳完全癱瘓，深層痛覺 (Deep Pain) 消失。",
            options: [
                { id: "a", text: "IVDD 第五級 (最嚴重)", correct: true, feedback: "正確！深層痛覺消失代表脊髓嚴重受損，需在24-48小時內手術，否則永久癱瘓。" },
                { id: "b", text: "IVDD 第一級 (輕微)", correct: false, feedback: "錯誤。第一級只有背痛，仍能走路。" },
                { id: "c", text: "扭傷", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 81,
            species: "reptile",
            patient: "變色龍",
            symptom: "眼睛凹陷，舌頭射不準或射不出來，皮膚皺皺的。",
            options: [
                { id: "a", text: "嚴重脫水 (Dehydration)", correct: true, feedback: "正確！變色龍通常只喝流動的水(滴流)，若供水不當易脫水與腎衰竭。" },
                { id: "b", text: "視力退化", correct: false, feedback: "錯誤。眼睛凹陷是脫水指標。" },
                { id: "c", text: "舌頭受傷", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 82,
            species: "bird",
            patient: "鴿子",
            symptom: "歪頭 (Torticollis)，原地轉圈圈，翅膀單側下垂。",
            options: [
                { id: "a", text: "巴拉米哥病毒 (PMV-1)", correct: true, feedback: "正確！又稱紐卡斯爾病。典型的神經症狀為扭頭與轉圈。無治療藥物，需支持療法。" },
                { id: "b", text: "撞到頭", correct: false, feedback: "錯誤。" },
                { id: "c", text: "缺鈣", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 83,
            species: "dog",
            patient: "柴犬",
            symptom: "不停地追著自己的尾巴咬，甚至咬到出血，制止無效。",
            options: [
                { id: "a", text: "強迫症 (OCD) / 刻板行為", correct: true, feedback: "正確！柴犬是常見好發犬種。需結合行為矯正與藥物(如SSRI)治療。" },
                { id: "b", text: "尾巴長蟲", correct: false, feedback: "錯誤。排除皮膚病後，若長時間重複則為行為問題。" },
                { id: "c", text: "肛門腺炎", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 84,
            species: "cat",
            patient: "貓",
            symptom: "長期流鼻涕，臉部變形腫脹，推擠到眼睛。",
            options: [
                { id: "a", text: "鼻腔淋巴瘤 或 隱球菌感染", correct: true, feedback: "正確！貓慢性的鼻腔問題常涉及腫瘤或黴菌，需採樣鑑別。" },
                { id: "b", text: "感冒", correct: false, feedback: "錯誤。感冒不會造成骨骼變形。" },
                { id: "c", text: "撞傷", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 85,
            species: "fish",
            patient: "海水小丑魚",
            symptom: "身上長滿像白色花椰菜的增生組織。",
            options: [
                { id: "a", text: "淋巴囊腫病毒 (Lymphocystis)", correct: true, feedback: "正確！這是一種病毒感染，導致細胞過度肥大。無藥可醫，通常會自癒。" },
                { id: "b", text: "白點病", correct: false, feedback: "錯誤。白點是小點，不是塊狀菜花。" },
                { id: "c", text: "黴菌", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 86,
            species: "dog",
            patient: "貴賓犬",
            symptom: "吃完飯後不久就吐出未消化的食物，且又馬上吃回去，體重正常。",
            options: [
                { id: "a", text: "反流 (Regurgitation) / 巨食道症", correct: true, feedback: "正確！反流是被動地吐出(無噁心感)。需站立餵食，利用重力讓食物進入胃部。" },
                { id: "b", text: "嘔吐", correct: false, feedback: "錯誤。嘔吐有腹部收縮動作，反流沒有。" },
                { id: "c", text: "挑食", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 87,
            species: "horse",
            patient: "馬",
            symptom: "在劇烈運動後，尿液變成深咖啡色。",
            options: [
                { id: "a", text: "橫紋肌溶解症 / 星期一病 (Tying-up)", correct: true, feedback: "正確！肌肉損傷釋放肌紅素入尿。常見於休息日攝取過多穀物後突然運動。" },
                { id: "b", text: "膀胱結石", correct: false, feedback: "錯誤。結石血尿通常是鮮紅，而非咖啡色(肌紅素)。" },
                { id: "c", text: "喝太少水", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 88,
            species: "cat",
            patient: "貓",
            symptom: "被百合花的花粉沾到毛，貓去舔了幾口，現在在嘔吐。",
            options: [
                { id: "a", text: "百合花中毒 (急性腎衰竭)", correct: true, feedback: "正確！絕對急診。需在幾小時內開始透析或大量輸液，否則腎臟會永久壞死。" },
                { id: "b", text: "腸胃炎", correct: false, feedback: "錯誤。" },
                { id: "c", text: "沒事，觀察", correct: false, feedback: "錯誤！這會害死貓。" }
            ]
        },
        {
            id: 89,
            species: "rabbit",
            patient: "兔子",
            symptom: "頭歪一邊 (Wry neck)，眼球震顫，甚至翻滾。",
            options: [
                { id: "a", text: "腦西托蟲 (E. cuniculi) 或 中耳炎", correct: true, feedback: "正確！這種微孢子蟲會攻擊神經系統。需長時間服用驅蟲藥(Fenbendazole)。" },
                { id: "b", text: "落枕", correct: false, feedback: "錯誤。" },
                { id: "c", text: "撞傷", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 90,
            species: "dog",
            patient: "未絕育老公狗",
            symptom: "大便變得很扁細，尿尿滴滴答答，觸診腹部有腫塊。",
            options: [
                { id: "a", text: "攝護腺腫大 / 囊腫", correct: true, feedback: "正確！腫大壓迫直腸導致便便變細。建議絕育可改善良性增生。" },
                { id: "b", text: "便秘", correct: false, feedback: "錯誤。" },
                { id: "c", text: "大腸癌", correct: false, feedback: "錯誤。老公狗首要懷疑攝護腺。" }
            ]
        },
        {
            id: 91,
            species: "cat",
            patient: "貓",
            symptom: "耳朵有血腫 (Aural Hematoma)，腫得像餃子一樣。",
            options: [
                { id: "a", text: "耳血管破裂", correct: true, feedback: "正確！通常因耳疥蟲搔癢或甩頭導致軟骨間血管破裂。需手術引流並縫合壓迫。" },
                { id: "b", text: "腫瘤", correct: false, feedback: "錯誤。這是液體波動感的血腫。" },
                { id: "c", text: "蚊子叮", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 92,
            species: "bird",
            patient: "鸚鵡雛鳥",
            symptom: "嗉囊裡的食物完全沒消化，變硬像石頭一樣。",
            options: [
                { id: "a", text: "嗉囊結石 / 食滯", correct: true, feedback: "正確！奶溫過低或濃度太稠導致。需溫水沖洗按摩軟化。" },
                { id: "b", text: "正常現象", correct: false, feedback: "錯誤。" },
                { id: "c", text: "長腫瘤", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 93,
            species: "dog",
            patient: "柯基",
            symptom: "突然慘叫，前腳跛行，痛得不敢著地。",
            options: [
                { id: "a", text: "生長板閉合不全 或 肘關節發育不全 (ED)", correct: true, feedback: "正確！短腿犬種常見前肢關節問題。需X光確診。" },
                { id: "b", text: "指甲斷裂", correct: false, feedback: "若指甲無異狀，則懷疑關節。" },
                { id: "c", text: "心臟病", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 94,
            species: "reptile",
            patient: "陸龜",
            symptom: "龜殼變軟，指甲彎曲，四肢無力撐起身體。",
            options: [
                { id: "a", text: "代謝性骨病 (MBD)", correct: true, feedback: "正確！缺乏 UVB 燈照與鈣質。是不可逆的骨骼變形。" },
                { id: "b", text: "營養太好", correct: false, feedback: "錯誤。" },
                { id: "c", text: "先天畸形", correct: false, feedback: "錯誤。多為後天飼養不當。" }
            ]
        },
        {
            id: 95,
            species: "fish",
            patient: "魚",
            symptom: "鰓蓋張開，呼吸急促，鰓絲顏色變成暗褐色或巧克力色。",
            options: [
                { id: "a", text: "亞硝酸 (NO2) 中毒", correct: true, feedback: "正確！亞硝酸或是褐血病 (Brown Blood Disease)，血紅素失去攜氧能力導致窒息。" },
                { id: "b", text: "氧氣不足", correct: false, feedback: "錯誤。雖缺氧，但褐色鰓是化學中毒特徵。" },
                { id: "c", text: "寄生蟲", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 96,
            species: "dog",
            patient: "米克斯",
            symptom: "被發現時倒路邊，流口水，瞳孔縮得像針尖一樣小 (Miosis)。",
            options: [
                { id: "a", text: "有機磷中毒 (農藥)", correct: true, feedback: "正確！典型的乙醯膽鹼堆積症狀(SLUDGE)。解毒劑為 Atropine。" },
                { id: "b", text: "阿托品中毒", correct: false, feedback: "錯誤。阿托品會使瞳孔放大。" },
                { id: "c", text: "中暑", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 97,
            species: "cat",
            patient: "貓",
            symptom: "乳頭周圍出現快速生長的腫塊，且表面潰爛。",
            options: [
                { id: "a", text: "乳腺腫瘤 (Mammary Tumor)", correct: true, feedback: "正確！貓的乳腺瘤 85% 以上都是惡性的(癌)。建議雙側全乳腺切除。" },
                { id: "b", text: "乳腺炎", correct: false, feedback: "若無哺乳紀錄，主要懷疑腫瘤。" },
                { id: "c", text: "脂肪瘤", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 98,
            species: "bird",
            patient: "鳥",
            symptom: "喙部與腳的角質層過度增生，甚至變形像蜂窩狀。",
            options: [
                { id: "a", text: "疥癬蟲 (Scaly Face/Leg)", correct: true, feedback: "正確！這是一種蟎蟲感染。需使用 Ivermectin 治療。" },
                { id: "b", text: "營養不良", correct: false, feedback: "錯誤。" },
                { id: "c", text: "老化", correct: false, feedback: "錯誤。" }
            ]
        },
        {
            id: 99,
            species: "dog",
            patient: "拉不拉多",
            symptom: "游泳回家後，加上尾巴根後部突然下垂無力，沒辦法翹起來。",
            options: [
                { id: "a", text: "快樂尾 / 死尾巴症候群 (Limber Tail)", correct: true, feedback: "正確！因過度使用尾巴或是冷水刺激導致的肌肉損傷。休息幾天會自癒。" },
                { id: "b", text: "骨折", correct: false, feedback: "錯誤。若無外傷史，多為肌肉問題。" },
                { id: "c", text: "馬尾束症候群", correct: false, feedback: "錯誤。那是神經壓迫，不會突然發生並自癒。" }
            ]
        },
        {
            id: 100,
            species: "cat",
            patient: "貓",
            symptom: "下巴長了很多黑黑的小粉刺，有時會腫成痘痘。",
            options: [
                { id: "a", text: "貓粉刺 (Feline Acne)", correct: true, feedback: "正確！毛囊角化異常。常因使用塑膠碗滋生細菌導致。建議換成陶瓷或不鏽鋼碗。" },
                { id: "b", text: "跳蚤大便", correct: false, feedback: "錯誤。這是在毛囊裡的塞子。" },
                { id: "c", text: "髒東西", correct: false, feedback: "錯誤。這是皮膚病，洗不掉的。" }
            ]
        }
    ]
};

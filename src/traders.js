const pkg = require('@dydxprotocol/v4-client-js');

const crypto = require('crypto');
const PriceFetcher = require('./price-fetcher');
const OrderbookKeeper = require('./orderbook-keeper');
const MarketTrader = require('./trade-types.js');
const MultiMarketSentiment = require('./multi-market-sentiment.js');

const smallTraders = [
  "index tackle liquid oyster immense soda egg tunnel stairs decline breeze sphere track suggest suit merge burst awesome remain virtual verb salmon auto reward",
  "dolphin person virtual axis legend move scrap push spread find east broom guess endorse culture coast matter envelope era shove double spoon vacuum wait",
  "opera cluster hint leg expect situate scorpion radar enemy spare original draw luxury depart pulse traffic obtain legal ticket answer ocean damage iron million",
  "crane logic problem dismiss flat more staff silk tip junk clog sail peasant apart giggle dizzy cage humble solid tribe math wine price daughter",
  "stool exclude ostrich treat monster eyebrow funny swear borrow student sentence arch cause remind radio call comfort hungry transfer brain symptom monster govern olympic",
  "actor stable spoon enemy body patch then jacket brief please blood notable enlist glass soda acoustic abandon october pattern much fragile monkey prison reunion",
  "common insect alone rail screen friend census absorb aunt code naive tuition produce wheel wait pulse autumn shock announce match polar shaft sauce federal",
  "battle regular disagree input sister turkey grant athlete chicken discover turtle patch before simple detail artwork tank pencil confirm sure often differ unknown long",
  "miracle chalk fence liar federal own door imitate veteran harbor version shop human occur universe fatal stairs step island depend sorry crawl firm globe",
  "blush proud race follow bunker caught goat gorilla report wrist delay current struggle desert meat whisper become pave fix sniff slice small top electric",
  "library task fever vital project language sponsor march couple stable leg language beef farm tuna mimic vote flush dutch ability joy domain pelican crack",
  "celery safe soldier suffer economy lesson federal emerge under gate faculty timber invest bless portion purpose crew ridge potato educate subject between always claw",
  "like hope notice body judge cannon foil trash dance share stuff creek shrug double moment exact level gospel health small stage aim wage hat",
  "gas symbol bitter ginger craft knife expose among pass kidney dash champion fiber frown churn bike antenna depth ill spider figure hamster sign present",
  "once early suspect believe cup course pepper satisfy payment doctor genuine country panic broccoli coin pet spring tree receive choice coil piano ocean prevent",
  "hundred victory luggage dry fence broom common tomato among joke coil mad raw toast abstract egg flame insane slush glide palm sentence good stage",
  "quarter caught tide cannon water eyebrow dash shy exit cream quality pepper empty pair income spy use quit panther minor tumble lemon unique fatigue",
  "cloud captain stand canal together casino click copy stumble blade appear very movie drill anger town fiction region shrimp hint copper island hidden bonus",
  "swift beach rough quote mammal antenna crucial sample cave design tourist regular canyon obscure panic raccoon disorder good empty tourist hunt tiger burger drink",
  "style cool mandate train cabin hold current about pepper erase indicate antenna cup excess grief filter keen wheat powder excuse pioneer remind mother crawl",
  "core flame beyond lunar hamster fabric maze globe cargo buffalo market salad conduct start lounge endorse mom faint below monitor addict orient dizzy between",
  "cave market alarm market conduct tilt mechanic crunch luggage message try kingdom ticket fat harvest immune bring drum quarter borrow cool season hurry popular",
  "sunny return distance circle melt woman census moral sadness observe hand gauge edit salad horn priority reason author cradle effort another kidney pave later",
  "message gold slot toddler question intact access firm that raise visa demise harvest blind garbage tail uncle person mind together street funny season search",
  "digital blood mean flame love pulse praise small inside gain squeeze lucky embark minor peace upon bread remain venture wire achieve news silk clump",
  "song nest worry dinner swamp wait rule lunar donate news smile fragile rapid cable either wool bag oxygen music employ fever wheel aisle ecology",
  "hospital require such expand fee buffalo soul vague fiscal music inform rigid upset beyond lunar thank finger token image debris that run ribbon index",
  "joy like angle urge source you seed marriage rent dirt fatal swing sign expose silver multiply punch razor vendor runway suggest illness guitar fence",
  "beauty purpose awful camp rail coconut surround desk sell nominee oblige sight salad canvas autumn become body fiction kingdom fossil satoshi can auto blind",
  "neither festival toward define tattoo latin risk obtain ill school gentle nominee poem pill lounge loyal worry final follow fly sorry boost lottery aware",
  "wet timber seminar alter disagree trophy noble logic violin inside wet mule angle cannon knee avocado live diamond dress chief march cotton special pool",
  "proof door shallow august suggest swamp creek clap opinion family crop riot slow uniform question mean gentle mansion crunch boring large web fix lucky",
  "cotton glory hope inflict ship decade guide civil maid pottery duty wish stuff critic upgrade churn attend mystery giant blur bomb tomorrow impose gauge",
  "phrase payment save banner crater canyon sound letter monitor taxi brave tornado unhappy chapter market raw salute merit meat ten chest combine cruel staff",
  "grid book tip grunt tail day box vibrant immune gesture eternal pig punch coast sauce tumble vendor umbrella panther east soon garage choose attract",
  "mango unfold juice traffic bless rotate vanish capable furnace media corn purpose clock axis slow crowd punch cactus hurt winter sword radio wood fat",
  "ranch infant case record kiss number pulse salon image accuse safe chapter switch swear goat shiver property bright problem front trick dirt february impulse",
  "nuclear square code glad bean certain theory draft duty slush path music equal harbor square media pigeon sniff skull carry empty uphold opinion castle",
  "satoshi cousin box under smart media motor island detail access better approve turkey pride season you wide crime tool explain fix stadium skin east",
  "situate major earn net glare order expand educate surround entire jaguar lady round hospital tackle title number citizen match correct priority liquid steak venture",
  "wrestle leader main decorate grant pet submit host glide notable beef reflect shoot ski flash doctor witness endorse swallow inspire purse prevent drop cancel",
  "oyster annual inflict culture turkey disorder ordinary robot know pair odor dial fresh caught crush drum razor corn buddy blind hire addict spell struggle",
  "episode gravity until hunt enemy harbor foot cause sibling essay say drink blind enemy rabbit park sunset noise shift lecture actor shuffle edge cycle",
  "prosper february negative kind you stomach sauce diamond screen law dismiss leisure park kangaroo arrive this scout miss soap always story tuition hurdle kangaroo",
  "tiger whip dog same rhythm avoid income transfer perfect credit index before reason donate trouble immune squirrel marine shoot pizza raven marine absent mixed",
  "one wool latin claw april cupboard divide beauty humble canoe cotton frost grief auto hole cart orange armed river creek wish memory minute permit",
  "have dress prison crystal answer allow glory else usage clutch drop behind bubble frame brass truck boat fan slow response lab tribe promote tennis",
  "parent seminar garlic swim busy hawk resist fork feature walk famous foster carpet during detail close scare judge bird wage champion patient mobile kitten",
  "palm wasp receive black mandate bargain edit welcome carbon tiger thing gesture other immune pumpkin organ motion loop accuse salmon original install scale inmate",
  "affair will tail rally ability absurd wrestle save income poet obvious become current middle angle talk draft broccoli iron soon maximum negative chalk hold",
  "general patient charge project hope wealth balcony popular noble tank riot syrup novel neither route ocean abandon fiction parrot traffic marine drop teach gossip",
  "gallery else art review dog craft range shift armor shadow marble analyst dad hurdle comic plate federal manage adjust spoil goat dragon topic burden",
  "solution mom dune region rifle mother they stomach smile maze vicious twelve toddler rookie organ three digital virtual nominee stool deny six dry salon",
  "smoke siege midnight tree decline visit shift claim stable maze head arm pony pride body put cliff copy return word faith budget promote brick",
  "cluster pink arrow salon arena clap patrol balance bottom tail step left vital warm choice wish emerge carry discover tool monitor depth art arrest",
  "rally kiss finish love coast assume patch rookie point tag curious gauge fence spin pair group ready auction tuition pony morning expect kiwi staff",
  "inhale west food agree chicken food wash merit obey winner since critic puppy area still wire kick lizard chalk melody evoke omit update water",
  "silent try crisp claim random lion hand harvest celery boy capable dust birth recall frequent task evidence will cook awkward sort picnic category toddler",
  "spare truck brick invest gift snack doctor oblige aim brown alley vapor isolate deputy maple moon spoon spot breeze turkey boy hint lucky scale",
  "concert damage program hazard wild useless humor stamp rally second skull squirrel impact link peasant remind inspire favorite bicycle maze hunt clinic huge quiz",
  "indicate fun goat differ walnut unable talent oil nothing finish giraffe ranch brain above sting lazy impact fatal gas crawl alcohol work hold angle",
  "mistake grow turn taxi street rely lobster bracket primary illness build toddler oblige priority annual mad view dice warrior child slice arch swarm crime",
  "myself paddle today napkin pause doctor chest shy seek pistol during click asthma person chef prize fog cruel east trial bitter bridge output race",
  "torch matter exhaust change clown diagram ripple page express neither erode hold diesel bless response churn patch genre give industry together noise quantum legend",
  "cruel sister possible add casual wage spin hollow clay modify develop offer cargo need embark comfort left slam excess note gate furnace split lesson",
  "oak kid remind predict autumn kitten soda keep cereal that blame void museum confirm panda harvest power circle people raccoon normal exotic tag miss",
  "travel mixture term make asthma team reflect vote raccoon blur patch soap sketch old select slow tuna prefer expose grocery will valid fantasy silent",
  "empty actual light current piece turtle day harbor two raven hub assume super motion effort gasp inquiry rely private skull garlic legend test feel",
  "door early regret attack hope wood mountain swamp casual minute bullet dynamic wine napkin spice gasp metal few crazy remove else panic very warrior",
  "rude afraid cage example swear error afford media pipe latin sign fine fix obscure inside opinion clinic sea mammal person merit invite artist shine",
  "seek joy judge work patrol trust history man duty digital meat parade meadow fox runway sea damage photo donate rice fragile kitten display grass",
  "vacuum chunk before museum sense salad rib misery uncover yellow piece lawsuit gold cable swamp network tool antique library slab nice victory robot envelope",
  "civil eager junior wreck gravity mother unfair fold problem return steak dry now fine shift clever town average identify tag output involve borrow dance",
  "immense notable owner april differ grass force swallow album leopard matrix cruise tribe jealous stool today elbow tide manual myself casino shine tail broom",
  "urge express process unlock alter pupil tent chalk noise puppy birth patrol tiger rent enough immune tell heavy squirrel palace demise gun excess crisp",
  "exotic fold shock install cargo finger tiny transfer blade reopen place absent split special live choice penalty tube finger core entire lawn fall luggage",
  "exercise mandate nice anchor exhibit acoustic piece clump atom exotic eager flock roast hospital leaf come aspect cage evidence situate about high fine clip",
  "fun fog connect speak reduce unique afraid island foam kick illegal arrest foot toy will infant grass elevator erosion unit vendor elegant rain orange",
  "planet write camera stay breeze moral clean enact peanut property muscle ordinary gain leopard forum arm fly shift taxi surge second pipe auto erosion",
  "divert shock wrist skirt lava busy spider either make cactus pony cement alert panel invest wolf ripple huge belt negative wing behind museum cousin",
  "survey author rice icon topple absorb destroy switch cliff air detail dinner smart glow muffin uncover join prefer robust speed video runway small never",
  "appear giant begin copper twist proof pole next inside broccoli ready girl jewel leopard have keep torch join creek attack path junk glue best",
  "unfair prevent awful pride scare size story auto toy inhale soap stay dad clarify unknown palm claw grab because robust achieve later gas punch",
  "topple notable food exotic forget effort confirm ethics wolf ghost dragon real urge friend dance federal midnight child hello glide hurt treat potato hope",
  "glide pole endorse lemon buyer combine uniform tumble leave cargo hawk tag crunch arena hundred aware twice slender sword mix basic goose cushion era",
  "family page erupt pet eyebrow immense bonus clock gadget coil right gravity leisure rather flee bird valve mixture menu reopen film response gasp maximum",
  "venue tide sock empty hidden depend toward butter globe thank shell vicious comic punch sound illegal educate essence renew share tomorrow post pride crouch",
  "absorb soul earn outside elevator drift foil north fold ladder fiscal mirror notable air silly wonder hello dirt grain bonus garbage measure use athlete",
  "load cube genius ceiling you vacuum brave life happy region ordinary sell fetch neutral reunion husband gauge birth power skill symbol giant kitten infant",
  "marble evoke amount obscure pave soon shift perfect baby heart erupt large noodle meadow theory mobile custom border robot mansion fresh airport nice soccer",
  "people door economy advice lounge sand monster method gap pepper rug syrup define tenant twice nuclear vessel acoustic noble truck patch spoon cat frog",
  "sight air unit scene leisure steak orient coral short symptom gold captain hard repeat word fiction duck work kiwi solve cash oven electric method",
  "beauty grief abstract hold play pink sting brass diet love extend census evolve bunker oak skull border beach believe fun reason body settle sausage",
  "slice gesture model decorate border flush brain patch behind fly smoke capable subway urban blind flush spoil discover glove praise panic area wash belt",
  "cruise flight pizza siren regular apology secret novel mother flame trade salt depend victory cruise fortune danger awesome market wheat among clump diet message",
  "tumble mixed patient zero weather okay peanut runway hard sustain lava strong magnet equip ethics notable apology drastic receive pipe gentle domain multiply stereo",
  "hire believe robot describe face actor bless garlic present sniff reform master nuclear oven amazing pumpkin fatal amount later update mixture lemon abuse domain",
  "embark tag dawn track business response vivid brain metal disorder pigeon buffalo lemon air bean will diamond broom captain now enforce deputy fury phone",
  "mean that minimum hen hedgehog balance actress barely mail figure pattern plug flag upper chair purity pulp enrich lion maid father dice insect proof",
  "theory hub grid alarm trick elevator enlist tower hire conduct benefit burden exile flat warm episode shallow elbow path repeat bicycle season add predict",
  "search forum replace cake shell tank fringe heavy burst lizard master extend visual detail history ensure obscure roof subject guide size pond mirror admit",
  "dwarf boring polar pulse wasp clown industry husband view child love toss worry penalty spend insect theme multiply love arrest orange labor duck episode",
  "gasp warfare devote thing scout mind around indicate kiwi potato tail only segment tuition clip zebra coach answer situate quality dumb tilt lady jazz",
  "rubber front water million lyrics crush success strategy buyer already gym share neglect defense switch month imitate couple boil dignity ancient fiber horse present",
  "robot tool recall rhythm accident report motor welcome luxury noise wish avocado girl bind curtain cry forum basket record total sphere hammer found visit",
  "season salt flag employ upon friend void sustain chunk mammal ring mobile margin phone cry soap brick glory album library spray gas erupt sudden",
  "notable next arrow output tackle humble frost endorse board hair agree drink endless century donor infant fox marble wolf trouble summer crunch say shed",
  "include gesture accident loop drop apart purity carbon scare gym farm endless pact sunny duty cost friend human parrot heart property master okay absent",
  "cancel alley edit across enable permit cushion acoustic aware affair blouse job pioneer awake notable reject gospel floor wall cloth power museum almost then",
  "gaze cause fan eternal swarm online hotel boost choice craft winter route weekend else circle genre danger humble paper blast flush oblige around mixture",
  "put over grow degree flavor story fiber lizard spray radio maze tribe resemble dose lucky benefit evidence exclude rural armed miss soup walk column",
  "purse stone survey bus ripple mountain churn average little place chef world text welcome rich fiscal lens verb open screen harvest travel oven virtual",
  "pride mask custom dream hand suit switch owner dinner gas borrow above degree subway version notable pizza scrap benefit leopard mansion talk shiver initial",
  "column trade carpet elite between judge subway excite just remind kid exit shrimp catch hint sail afford broom crumble census dinosaur resist mask twin",
  "spike original canal neck bright dune text upgrade pipe party unaware nasty custom pulp mixed equal alien vague issue subway circle valid expect mercy",
  "repair cube clerk prevent satisfy visual photo scheme control jump scissors nurse echo student opera embark adjust bone today gate erode envelope coral price",
  "warm gesture cement accident pioneer biology dune impulse table mystery hip laugh provide boy note palace alarm admit pigeon cupboard gentle decorate keen chuckle",
  "electric mean torch monitor physical away blade joy surprise require tribe ocean ecology super long message mandate minimum key item awake float diagram eight",
  "pause task blossom evoke notice treat maze ability figure win kick turn replace exact canvas ripple extra such order ecology expand industry frequent dice",
  "mandate exit until clever frame oven gorilla behave bargain chef lava mandate permit kiss impose leg armor tide radio crystal plastic delay bike around",
  "shield tip build song victory equal together decrease answer fossil sausage wall dynamic casual envelope film outer voyage attack exercise open panic obey job",
  "review indoor online dizzy keep shrimp blue rude page father okay rude famous popular call human stuff offer swift near physical ready spike flavor",
  "stumble business join harbor citizen fat glue surge board turkey upper clay depend ability moon dice evidence wine toe ethics ripple aisle rabbit top",
  "year cheap derive else flush joy they insane split throw reveal gallery leopard penalty more bench voice describe nephew quiz lake bamboo crush dash",
  "direct jealous sketch used drive sentence curious tornado tilt coach evidence wave marble monkey fortune prepare topic wrap logic swing debris million tube permit",
  "purchase guitar egg series avoid together memory scout anger pony birth only city provide jazz team rack adjust guide pipe oppose rabbit interest pact",
  "stumble crop human door globe cram drive need gospel cook dream mobile shift robust seminar garden flag clarify ripple rapid icon hazard race core",
  "typical price cool object damage popular claim school toss earn sheriff believe motor neglect pear cook stool useless shoulder creek error intact clinic price",
  "episode monkey later pill exclude apology steak speed fun domain purchase music mansion asset history travel roast cannon auto stereo host surge mercy blood",
  "garden remind blanket blame frozen again barrel clip fragile gift notable eyebrow eternal menu topic outer pen force success cheese primary best art stairs",
  "very morning casual muffin task vibrant satisfy pulse weather slab vote shuffle nest punch connect file potato chronic extra inherit online toss debris work",
  "gun nephew hunt heart mean couple junior use floor zebra sphere uncover room jeans capable limb arch large duty wave mystery gasp woman adjust",
  "surge suggest mad electric play window expect odor true cloud before fruit glad ball antenna aim tattoo walnut thank minimum dismiss hospital stick unveil",
  "hundred holiday exhibit repeat dirt upset subway coconut fossil web predict come erode egg world weekend sugar remain direct upon danger memory join myself",
  "vivid news science card gasp excess isolate force old type clay hover ridge virus rail pumpkin check bench few cliff crunch buddy inspire harvest",
  "game clean lion trumpet range critic game bridge economy segment that yellow neutral embrace attack exact mammal they toy flash brief acid timber breeze",
  "enlist era leader shed race syrup merry beauty spin thought ready trust sun price believe upper sad any match clown claw awkward monkey sponsor",
  "push scheme inject donkey bid derive ordinary outer snow pizza acquire text capital debris husband furnace crater endless leisure access live creek post basic",
  "uphold guess rookie panther soda exact kitchen describe nest donate base hill ability famous pudding mixture suspect lamp switch choice sea where horse retreat",
  "any huge control spirit attract sheriff dress fashion hedgehog lumber secret result miss battle secret image abstract opinion length purse hazard tuition hair mushroom",
  "thumb eyebrow smooth unit athlete balcony cash ice exact wolf language enact bar lemon vocal hint spread prison include heavy aisle trouble fortune patch",
  "dog check second engine trust buzz abstract blush usual pink vessel total stable always vote keep flight letter useful slender joke net gauge ostrich",
  "quiz upset moment burger blouse visual barely breeze lunar guitar since deer change season silly bicycle debris donkey drive dress pull awful estate butter",
  "neutral mimic lift flash output grace law party trade robust coin roast wire candy notable rare affair marriage fiction avocado absent puzzle entry soccer",
  "erosion pistol water seven agent best gasp tunnel shock beauty monster address promote farm kitchen gentle flight clap senior icon antenna odor grow uncle",
  "when dust satoshi fade decrease insect bulk happy horror palm average around sweet enter regret film truth sauce vibrant mixture guilt feed minute mushroom",
  "hair toss faint enter old fury original story circle this pelican material humble claw depart odor cricket various grit loan napkin purity judge tiny",
  "naive where tourist reopen hour peasant stem remind jaguar duty buffalo transfer title age together quote silk creek buzz already check strong pass goddess",
  "sure twin dirt rebel find fresh kit october glove invite junior modify mystery weekend wild inside differ siren elevator frown spike engine bind art",
  "cabbage rescue equal fee master sight evidence surge observe asthma mad possible betray ride disorder trophy later virus rebel shrug loyal tackle erase oxygen",
  "regret enrich photo cage tumble panic age castle have sphere interest fringe plastic essence warfare chaos end alter until nuclear quarter skate daughter fossil",
  "color waste throw ginger sell host coconut resemble card melt ship isolate trim crumble exile prosper easy physical horror amateur firm spoon shed fortune",
  "book weapon farm boy draw evidence quit choose virtual spray brain link skirt prepare thank kiss prosper pet supreme river fever ginger canoe captain",
  "oven unknown inquiry never spy orphan tide begin give survey cruel hard define stage denial lawsuit cancel permit speed certain wall demise frequent combine",
  "connect galaxy creek envelope cave wasp pink drink immune that priority violin stadium quarter wide inner bottom six orient animal bean indicate chaos island",
  "edit flush pluck net thing rely urban infant aim oyster assist crouch melody please taste must spend guitar impact clay connect track sister lecture",
  "noble economy jump wine act victory deputy story furnace chimney poet shoulder cube define ensure butter cage inherit van carry comic naive gravity bid",
  "guess urge orchard type donkey case wear monitor club sense together devote vote tortoise green slab basket border yellow only spray wolf almost exchange",
  "artefact trim best sport govern alpha swap slab split legend obscure patient develop penalty mosquito awesome sort ticket bulk cry ramp apology people will",
  "decorate sight true dignity ill issue opera rose spend road duck smile seat extend wife doctor input affair short office kind leave giraffe goose",
  "delay birth best bottom early exhibit blind stock biology law second until curtain inject slight slogan stage wrong spell rate chronic shell share ill",
  "useless dish barely belt boil boss uncle coast sail space cancel medal few few monster doll game camera valley clerk vintage uphold arm elegant",
  "glove club similar blanket elder curtain elite expand legal sponsor excess shuffle surge spatial usual hen raccoon acoustic benefit message filter cave where again",
  "skirt door blouse divorce extend ticket advice view sibling warrior parade can knee chunk rice sea monkey excess deny payment first parade agree output",
  "equip beach cotton physical just book oyster similar ketchup ball write fever evidence brass spirit unique profit december vanish hundred tiny rather play wife",
  "panic mouse innocent engine pen mention quarter crack crop bracket buddy connect kind sing clog salon picture nasty chronic mercy rebel organ royal text",
  "verb apple scale unusual spike reform youth marble palace bright tower legal merge village such give cabbage agree comic hip husband very blue bird",
  "health cross century point gap clarify seek sausage square pink accuse awful limb convince game abandon apple foster raven despair engage style list gasp",
  "brass crucial lunar stay cake finger puzzle absent small smile ride taste frog library latin private airport flavor swamp work cruise alert hurdle thank",
  "secret artwork elegant helmet abstract lens monkey emerge bronze tent fancy predict chuckle end alone picture air turkey roof muffin desert put shiver basket",
  "world duck spawn proud develop level palm senior eye extra fabric stove brisk spawn system orbit royal current unhappy journey taxi artefact solution noble",
  "source clever hard fiscal melt candy comic sight shove access eager rival age lab position alcohol chicken client enable erupt sponsor cheese nation debris",
  "vehicle display puppy before own solar motor baby hand gloom minute subject dinner myth pattern recycle quality guilt kit guitar pair dash brand boost",
  "legend grain grape spare since real prepare rebuild eyebrow core cute smile sick canyon wheat rival profit hire cage pluck discover draw cactus crime",
  "weapon march zone price eye cradle control crazy exhaust defy panther finger siren left mercy illness faculty flash table toe keep basic balcony town",
  "harsh luxury clock life gasp panther woman margin shift post entry unusual ugly stadium couch foil rabbit ladder bomb offer cook ghost debris claim",
  "fiber glow forget army lizard viable universe salt pet cricket tissue chuckle position liberty matrix output tomato spell salt trumpet fold voice sibling garage",
  "step bracket frame hen surge milk remind strike lonely absurd business inch lawn still aerobic learn glue like glass depend program charge ring twice",
  "traffic giraffe motion vintage clip autumn proud kiss ordinary vessel click view poverty denial matrix divert embark element delay dinosaur festival merit panic industry",
  "romance hobby banner harbor radio romance craft story tuition purpose humor nurse hello mimic demand alley soon chronic cloth phrase pilot solar tower hub",
  "verb notice hub brave honey unhappy trap inside junior payment kangaroo seminar access annual enemy canyon tool title exchange sadness place once stool edge",
  "mind fever gain slot phrase pole funny that match trial math right question silly brand toddler unable verb ring wreck gun old canoe uphold",
  "mad stairs nation lab patch ensure flavor mad cousin wave nothing scout drastic sting stove lonely moment damp add exist endless leave captain burger",
  "wife vessel average scale muscle drive jungle quick culture obey enough quality neglect bag ridge oxygen basket subject point thrive original aerobic rival dash",
  "street nest catch angry stick screen rate relief reward damp inherit intact allow regular opera just average ticket slam later happy wild bargain wealth",
  "absorb tiger typical choose field play height apple board kitten thunder kidney arrange spring flower market dismiss history federal course judge merit answer observe",
  "parrot move rocket festival property live gentle trap erase voyage bamboo aerobic chapter image brief achieve exit resource coral pool belt upon segment nasty",
  "danger key service outdoor story shoe green route there kidney cereal guide mother top sea flame clap aunt quarter camp wool umbrella easy satoshi",
  "lock object desert since toilet travel mix news buddy attack correct clerk crater sort ready wisdom slow water brown salon fury boss friend chapter",
  "equal child shrimp rib movie become ready century casino same vacuum crisp ten neck glory loan liar town laptop unable honey fiscal attack wolf",
  "horn lion music joke clog outdoor indoor physical patrol bargain try number jump pudding scheme runway before sure square prison once awful crucial brain",
  "crisp vehicle keep giraffe helmet cook document grace harbor lens cat juice balcony visual brush park nominee trend warm vicious hard begin repair grab",
  "ethics include cook wool enhance pencil celery trick focus barrel nerve public much lend sugar biology fragile define pair unable web valid metal acoustic",
  "mesh damage biology birth canvas myth valid feature next fiscal creek caught poem real evolve define flight type give shed country topple exile lucky",
  "grape fossil utility time method evolve neck isolate crop either change bitter relax attitude horn reunion senior dial pattern cook radar wild prison knee",
  "gain base glass raise next cycle lonely vocal cactus rent domain muscle inflict bleak index cupboard fashion solution will dry blossom fragile method oxygen",
  "practice bag toast plunge ceiling firm install swap liquid fade kind coin owner possible gate stereo refuse daughter laundry little note diamond ribbon drift",
  "dirt slush enter wink rack jar weasel subway blanket two muffin sadness summer park rubber region mushroom foil remain steak isolate advice frame arrive",
  "animal october exchange excess library ice stay trend hero brass celery wink feel safe stereo puppy company series rather bulb have mosquito grant need",
  "choice wise scheme year screen few spread toddler traffic lab lucky keen prefer youth ask hospital empty outer rebel ocean crack flavor tape crack",
  "acoustic learn mistake together tilt case gas relax capable holiday garden fat security option mountain allow educate wood yard neck again edge genius lady",
  "method jacket forward movie arctic prepare gift volcano hammer under tree nose anger village desert change shadow neglect strike urge type anchor child crush",
  "fantasy car because impact able water trap fox truly devote stuff label traffic tenant train fiber into off west slot road potato tiger bar",
  "stage unveil rebuild setup network february corn cheese misery session december bag panther apple attract excess frozen discover sauce wisdom movie long elbow uncover",
  "glide girl obey road popular chronic piece next supply pride first draft island hen develop wild float cheap gate elegant daughter few patient divide",
  "duty saddle blade arctic success oxygen uncle syrup marine hub random false reward fantasy text answer practice beach balcony cherry seed banner history daughter",
  "glue cancel roast pumpkin mix plug effort come anchor true film long pulp quit draw frame adapt cake nature thing damp hint dish island",
  "unhappy icon special quarter certain acoustic olympic horn erase into mail pattern victory finger small kiwi casual forward snake hundred step wood verb sunset",
  "amazing relax elite layer luxury resemble tower throw magnet chest erase grocery gossip about coil attend private indicate evolve task shadow hole hurry recycle",
  "shoulder session sentence winner evoke huge enter neglect pencil result pause violin maximum foot protect soap indoor taxi inform finish boil maze degree tragic",
  "pink humor year anchor secret paddle daring cherry inherit record arrange feel clerk truck horse lobster unhappy sudden van endless pave error useful used",
  "train mirror people innocent uncle rebel bitter great pink cabbage august mind cross side link update glide use cement mix amused palm barrel review",
  "reveal loud appear hybrid between pitch gate blue topic hard vivid slot fall creek uphold clap upper canoe push donate solid common join giraffe",
  "often story magnet health avoid again cannon never brown lion stock material black latin torch buzz beauty dolphin rely ceiling palace segment liquid hello",
  "hundred diet barely sport twenty aware position enforce reason volume nephew demise eye embark axis smooth solar stuff domain dilemma lazy wrist bright mouse",
  "mountain proof exist wheat moment scrap heavy tomato direct unusual fat canoe online ensure flower sport border present buffalo crush swamp lounge fringe cart",
  "camera degree reunion industry solar clump core acoustic inside quantum wet avocado express topic shrug orient infant hundred rather one blur pretty wear cash",
  "soft street glance dance mandate tag mention prosper excuse crane magnet diary entire zero change lunar glory visa arrow alert refuse test armor wonder",
  "kick month feature canyon vast tomato action supply way shrug exile enact ill master stamp invest turkey find burger nut satisfy dismiss orient august",
  "antenna leg coil brisk snap pair mesh humble crush finger record normal ski wave another annual turn salt private mutual obey ready desk meat",
  "iron deliver anger tape bicycle hole remind afraid science history believe true rebel soft apart crack green twin badge lake wrestle possible chair gravity",
  "duck velvet chase penalty oppose visa immense question winner lunar method tuition lucky recipe tornado clock fuel symbol person retire seed affair garage cheese",
  "income assist best jealous cactus butter quantum clutch tongue rule cook view decorate often life snow patrol midnight wait jewel chair fame title assume",
  "legal alley piece correct right truth mushroom garbage enemy genuine patch bridge rhythm smart visit transfer destroy car sentence try lobster where include daughter",
  "planet mountain now grid horn pass panda inspire dinosaur market glass regular gas sentence top solution taste case together motion review roof electric friend",
  "hood swim crime fence alien exercise dinosaur antenna gravity include tell juice shove dwarf cargo cup evolve drift neither crucial obtain culture major green",
  "deposit pipe salmon clever all oak badge birth mother indicate switch garlic silk quarter wear popular air globe hello mystery once trouble occur wet",
  "glance tent fence toddler ethics nurse emotion dash jacket close govern yard flee great tackle notable supreme misery protect fitness sibling hood horse circle",
  "session estate canoe circle ring shoe isolate under follow goddess hawk potato velvet target trash coffee puppy hockey wall release siren betray measure guard",
  "renew flash wise junk pony tennis wisdom popular cement normal rose verify office hire stable pumpkin weasel real kiwi bleak appear atom soft oppose",
  "hard kidney choice math rather reduce wing raise recipe dream cream witness glass island tide flee arrest taste dance check marriage version name army",
  "chuckle asset moment poem advance art robust friend erosion alley eight fragile wrist twenty rival climb license exhibit size ignore awesome medal glove ritual",
  "laptop range hockey coyote close sponsor tired aerobic pepper scene anger guitar minute near laundry oval coin kind gain market can carbon antenna decide",
  "game song castle drama elite detect market winner boring frozen limb cereal autumn adult grant vanish stage blade ticket fat venue year hope hope",
  "connect lyrics sea caught hard avoid more north airport affair case oval play fuel hire letter arrive beef over yellow office wine seek brown",
  "repair sustain pulp win time world deny hedgehog wood cover volume protect polar kitchen cattle open satoshi morning much avoid mask rebuild keen broom",
  "virus work holiday flag finish assist swift surface crater endless trouble train dust globe weapon glide hour basic six mass brush chuckle eagle seven",
  "balance carpet laugh high nerve card mobile skin lava online media vocal install virtual silver cinnamon spawn post century else wing carpet head manual",
  "old field forward bullet bulk garden pull romance better embody grab old orchard prefer boost duck hamster fragile crowd neither need conduct poem near",
  "three reunion enact object mosquito help march effort merge arena doll fade eight caught dust harsh tank bread chronic girl cycle thunder business tissue",
  "rain laugh brown absent festival attitude make define awful together mercy target custom stone age dove chief pull uncle train accuse document lemon lesson",
  "column duty betray eyebrow movie rhythm comfort balance joke infant nest series crouch oblige vicious wage escape alarm viable side child deliver outside over",
  "social hole usage wreck coral pelican split snake ask scare already able nothing attitude space unfair steel advance describe gate metal raise order ostrich",
  "opera era banana property display bronze donkey improve tube much load tiny pioneer measure board junior bleak burden tragic trap thunder purse crisp dutch",
  "little insect able enlist bronze obscure foam ramp mutual interest wine misery person fog then best rough bone north fancy agree huge loud alarm",
  "goddess use throw outdoor pottery earn relief add divide meadow crop layer child girl menu wet flash have company trigger bronze emotion front funny",
  "surge bird naive kiss border garlic forest virtual you amazing stick trigger era judge guitar social smooth fetch hotel chaos power boy auto limit",
  "wisdom select stem noise novel congress music vicious waste talent unlock math protect length struggle private exit annual credit oval oak garlic empower cereal",
  "twin monkey caught cushion height apology vendor close grant law turtle purpose margin test security voice know enhance during resource usual estate alarm peanut",
  "region desk grant spider fetch pool concert law spot okay zoo twist invite quality aspect toddler frown injury feed blast start legend mansion donate",
  "front minute pelican march menu age evolve grass spirit option track parent rebel liquid knock lion indoor aerobic wear express place film history sister",
  "space session feature talk obey worry novel worth armor chef tooth lamp come leopard mask live waste run bleak mansion pull ramp fog voyage",
  "gauge hub basic butter pelican tiger obey window lamp traffic fix insane head depend inhale shell cannon lunch toy put keep build only conduct",
  "impulse chat good more jelly kitchen guilt outside soon resist super erosion joke become tongue possible pistol shoot try hazard trim direct bless second",
  "library sea inquiry jungle evolve poet pupil toward orange chimney fossil sustain unfold onion poverty file panic pair raccoon hip proof fitness spawn position",
  "indoor minimum before wrist funny soup image anchor service mixed helmet worth prize puppy innocent chase wheel range work outdoor flag toilet inject staff",
  "rotate habit device draw mystery health bullet tortoise burden wolf immune logic minimum turn spare tape cruise cream idea emotion mandate noble puzzle wish",
  "panic pluck victory twice sugar cloud device attack chaos solve sorry icon oil major clean width bicycle pitch enable gauge expire plate shiver crater",
  "canoe game comic file wide grid grass steel soap flip monitor medal reunion situate slight weapon wonder crouch when plastic connect vanish office liberty",
  "add tortoise remain attract cart agree follow glimpse yard fiction long arena eager reopen hurdle spoil crime quote pitch decorate torch spin assault begin",
  "iron tower cigar deputy heavy nose sting romance puppy live celery speed wisdom dilemma champion inch bean burger card jacket smile blur mirror treat",
  "jacket index fee logic quit simple early goddess laugh either pride case result advice sad display flee drink choose whale street era guilt zone",
  "rubber grain pudding museum local inch off ecology together dog obscure keen provide kitchen theme sadness arctic dust situate pottery shiver predict simple virus",
  "syrup bamboo annual survey bottom denial uniform they response sun sad box laptop forum silk fiction trade jazz luggage outer crouch practice anchor stamp",
  "strong release follow kit connect equal remain ancient brick thumb smart syrup ten appear slam average answer destroy praise keen woman snap patient undo",
  "dirt still lamp grid police useless demise multiply number sail struggle tragic someone cycle fatigue course run leave slot run just drill wide humble",
  "famous tell sudden organ peanut derive twenty music spoil daughter mobile comfort ethics night accuse ice great heart drama circle total senior inhale vibrant",
  "spoil swear easy rain join purchase misery spell shoe depend soft indicate token estate praise capable hen senior west heart shed raw fox rifle",
  "tide junior glide slice hold brass huge tornado myth custom image unaware pride salt exchange people royal left disorder blush hub dynamic divorce claw",
  "squeeze answer jungle sauce guilt pelican renew forest short economy rent either leave decorate wagon comic network original profit trial adult frequent pluck relax",
  "oval glue warm advice question oyster ugly organ cannon soup cargo hidden suggest wait cube liquid erase group tip sail wagon kingdom harsh festival",
  "thing solid all asthma thank swear odor farm recycle crush circle cushion main acquire track grocery rebuild rebuild brick crew kick street benefit poverty",
  "utility since resource giraffe detect element sudden effort conduct pipe ugly ball any tool what best usage champion cousin benefit glide drive width chalk",
  "ancient gate submit radio midnight plate castle evidence mountain height ceiling stock barely corn quiz photo casino retire ramp mom order liberty simple wrap",
  "payment cattle about divert bird talent bomb chaos real family brisk obey include casino safe spend utility wrap bar cricket inject fury leaf submit",
  "correct chase define citizen meat change wild raccoon normal cherry camera faith hand hard firm birth matrix maximum armed group betray orient renew network",
  "quick opera style already robust mix slot monster poet taxi divert sting consider heart amazing leg feel mechanic bubble auction very win expand else",
  "fashion social sustain crack barely trip until reform fine wheel pulse actress conduct answer special doll shove leaf glide brain timber source post merit",
  "fire border spirit young jaguar sight grape elevator bread fantasy shy purpose mango skull net garage taxi leopard wash person cloud safe iron boat",
  "pizza friend style relief tray galaxy regret mix offer bundle miss spell affair churn cart slam vendor target drastic treat curious venue empty become",
  "main hospital coast accident link clean beef capable scheme year stove weasel cousin tree amazing erosion void egg control help oil belt alien potato",
  "later awful change great online patient harbor armor eager reunion place replace wood shine month nuclear inform coach auction gravity burger wall style route",
  "exhibit inquiry cover trouble more ivory cliff because life subject goddess casual inhale list unaware all pyramid protect person speak rate job raven sample",
  "inspire entire similar merge win cute message explain casual rail domain feed million embark actress coin under three like elevator begin enrich toe color",
  "tennis square lamp tonight extra hair select case front hard mass toddler raven eternal entire media silk volume valve inhale wreck cruel ranch modify",
  "animal rotate avoid cram dutch staff maid panther garbage vivid legal live steak tuition turn share kingdom confirm truck harvest oxygen ostrich radio flag",
  "exclude city prize recipe furnace accuse spell flat music craft napkin educate level kitten purse brain gold coyote patrol section cereal find outside roast",
  "float analyst elevator dose scene elephant peanut space surround erupt note glide above sunset build feed snap display town range arrange knife armed man",
  "notable trick harsh list shove record marine donor hurdle fossil mountain correct appear decide wink depth aware unfold dinosaur keen universe remind diesel match",
  "sunset load divert valve coil evidence vanish elephant crystal agent inhale edge nerve repair phrase flock song suffer client couple cigar project embark before",
  "old onion daring region leave gentle identify shoulder swap crumble best knock ability tower vault earth engage steak put brief short trap universe wide",
  "pioneer flush month funny excuse hard type deer brown electric artwork verify crime flame shell celery tilt relax saddle morning knock teach copper gaze",
  "unit soul uniform struggle month moment tilt brick inject observe pig muscle tank use reason quarter grace rapid auto good engage engine giggle sketch",
  "feature scene speed divert pizza birth island blush ginger army device sight double canyon life indoor drift squeeze loud guilt decorate subway crunch draft",
  "script measure achieve minimum exotic parade bonus animal castle forest retire matrix entire property during bounce tissue pencil initial guilt topic duty roast echo",
  "auto mechanic provide great cruel horn nation tattoo barely squeeze smart asthma resource age share coin wrist reject kick raven canvas crash piano stove",
  "dynamic leopard chuckle scene mirror universe cluster spin sunset lecture that prison weekend coin kit fuel reduce dolphin upon remind giggle good sword clinic",
  "install surface news gadget scale wool need charge oak sketch business slight tent short sponsor track man company obvious dice muffin next thank change",
  "forest shrug dismiss business mechanic fatal misery section buyer dial visual olive curious outer luxury false sunset will gossip web coral twenty invite mandate",
  "army pilot bag wife prison inject submit remove chief give whisper zebra size language puzzle farm result motor patch depth glimpse rally auction away"
];


const normalTraders = [
  "lesson scout dial harsh evidence fiscal review predict tone film evolve coral canoe sponsor try pioneer pluck swallow chicken raw ability drill thought balance",
  "cook melt ketchup charge away grass mimic aisle ride night satisfy basic fee clean shove course hire define volume actress abstract unknown famous tongue",
  "sniff assist smile expose across mean bulk pony program random ball tent plug hour until pipe tiger bridge inside shed soldier spoil poem autumn",
  "divorce surprise taxi hobby hen cram miracle meat consider used base cluster sense raw essence tumble glare action edge agree anxiety vault exit winner",
  "teach sign abuse detect follow they garden rice glare crawl fox trash tape scout virus force pyramid seek miracle can cave adjust owner custom",
  "crop often dinner chapter aisle razor kid discover proud frame order narrow behind tuition ranch leave autumn artist copy olympic olive voice parade slender",
  "strong prefer focus shield shrimp gesture auction time elevator person unaware elegant title borrow banana puppy venue marble parade lift army alarm wear atom",
  "spatial predict grab crunch proof mystery galaxy base festival intact cheap entire cherry usual main round clog vanish faint spin lamp search estate swallow",
  "field pluck ramp credit choose dust addict shiver sadness direct that toddler cat bunker destroy leisure unaware gain misery educate upper cruel game frequent",
  "love ignore ecology seed tiny conduct bottom aisle mixture oil exist cabin few room juice because camp food copper april slide snow verb noodle",
  "pink slice high bean endorse rose since please select enable pudding invest pink educate together sort usage shoe always memory review seek before tone",
  "strategy cry poverty million skate over pigeon tribe upgrade this figure lunar dilemma spend hurry six crater arena input private october destroy zoo crucial",
  "web false betray text mix quote repair flat hunt river sniff animal flee utility enforce leaf benefit plug wood plunge equip pizza mule sniff",
  "smooth swallow grid island album dentist merge amused ride upgrade certain correct lucky update dolphin lady fault best minimum flock plunge warrior inherit hazard",
  "fantasy eyebrow spatial replace primary degree shift forest poem arch rich dice can gasp east credit service object hand pig dress prevent museum boil",
  "quick pause off advance vicious sugar bean oil ski inform jar behind current net meat vanish pupil dose way aim ski ball purse urban",
  "uncle print rich paper nasty velvet mean enable lake earn six actor easy vintage next attend flip idle erase tomorrow casino fringe finish pulp",
  "olympic false adapt arch curious normal muffin spirit upon loan decorate disorder february awesome tube all enroll icon acid embody story olympic office cram",
  "permit office produce miracle remove soda bunker cabbage reunion innocent father neglect august start bread enough gorilla census language arch often victory item pattern",
  "gaze tell parade vessel mandate group imitate regret spy empower basket sauce assault agree barrel sweet fee into spoon ecology prison loud visit cloud",
  "broccoli keen exercise twelve aunt silver benefit inject betray soap kid panther digital abstract damp accident puppy happy fortune inflict weird fox odor defy",
  "library predict exist quality afford biology patch blast equal laugh betray whip match struggle chat derive convince beyond agent skill warm switch carbon casual",
  "present release category nuclear broom better sadness rather bleak devote glance option master cousin era endless hunt dial scrub rail scrap grab ethics crazy",
  "pole planet expect original check deny analyst genre rice under employ napkin either upper work denial victory pledge begin describe kit victory holiday ecology",
  "taxi bubble eternal pool have emotion radar ethics settle fabric math thumb erupt pizza trophy dutch lawsuit scheme nose athlete thunder swarm attack gain",
  "emerge advance crystal river minimum bridge action brother shrug control satoshi lonely hospital enhance attack pepper history assume danger gentle frame spirit coral atom",
  "alone about shy run fall joke moment motor despair staff trophy athlete plastic science fantasy swim true still easily diamond record lonely medal smoke",
  "toe crouch inherit plug desk aunt grain endless helmet garbage soul young crucial drum calm carbon sponsor inmate pulse sister mass fire network bone",
  "oxygen arena soft pudding dash imitate picture pencil sting danger toast sorry shy behave motor meadow crush dizzy axis shock ball like memory armed",
  "stem ceiling drink climb tornado lyrics engine logic must organ south annual diagram charge denial frozen poet heavy useful aunt caught undo fall border",
  "fresh once during zoo depend census glide kite image delay guide busy stage inmate twin undo curve report kit match document innocent canvas group",
  "soon street nurse media jealous either add use crystal spike ready step phone plastic spot salt sea salute can between vessel mean surprise goose",
  "visa salute twenty horn anchor enrich pudding daring expire pretty come poverty bicycle book bounce hire rhythm security share work choose domain web clip",
  "miss soldier woman make pulp meadow decrease above quantum vivid dose project script range achieve tilt hood illegal follow pretty pact tuition monkey lens",
  "ankle opinion cancel tag output obvious question abstract bring apology beyond task echo outer sight boat ability omit pole virus toilet ripple green laptop",
  "dry smoke portion total birth jazz era impact wheel found episode siren usual verb buyer kid diamond select defense crew glue speak advance humor",
  "shaft lonely axis expect journey bubble gadget bleak guard length youth artwork forest satoshi marine enjoy lunch shadow rice question lemon wrestle example slender",
  "please actress rhythm garment donate cushion enroll salon near have group cancel coconut lyrics echo tomato stove stamp order traffic mutual subject follow horse",
  "rebel auto pattern just city arena today wear track surround buddy design decade enter digital hint dynamic book stairs brand capital decorate unveil doctor",
  "embrace obtain divide spell enough jewel hamster bottom surface because misery sight gun world execute quality remove speak song stumble fade stand choose measure",
  "ensure laundry taxi novel sweet critic trim useless vanish venue erosion lucky ordinary fit weird purchase wood lecture dignity truly ocean process frost work",
  "addict trade wheel allow cash raccoon outdoor ocean pipe snack avoid naive seminar smooth heart defy rifle panther creek shed genius poet edit nephew",
  "beauty badge absent shallow blanket mixed fatigue exclude door noble abuse rich grocery deer place couch utility unusual penalty toddler barrel term frog wasp",
  "head wrong reduce awake desk crunch draw climb abstract ship garbage animal swing shed maple glare mimic fire clutch valid blade ranch pudding olive",
  "inner debris chase merry rapid boat mountain salt mango cancel soft fence cabin prefer gift pipe cave below slow person swift shed van victory",
  "science mask panel lunar scatter target initial celery voyage split brisk inform blue lounge morning cake harbor finish usual unaware normal salmon child reflect",
  "mail double snake coral praise deny nothing scheme deal behave alert blame hurdle tackle praise ketchup valve brown dwarf evoke nest blind unknown random",
  "abuse amused friend gallery predict wolf drink language scan very blossom hill autumn universe bitter risk merry census tiny cover collect crisp version february",
  "front hard that approve diamond hollow moral admit mountain gauge retire adult daughter track birth host subway lake pact planet elegant pumpkin erosion eternal",
  "ring six doctor capable toilet certain kidney hover road update mule they shift quiz carpet ordinary rapid panther breeze bar luggage crunch draw guide",
  "muscle gadget forum alarm palm garbage observe float slide celery master lunch ketchup slender sweet kick become dust essence moon delay category patch scrap",
  "during ginger indoor loan zone rather basic upper diary network palm abandon office layer approve vanish flush rose eagle elephant what speed mixed aerobic",
  "reason grab audit gain install room inner simple swarm stairs flavor fever kingdom proud twist hockey acoustic subject giraffe admit boss sort december either",
  "veteran task vocal swamp whisper armed obvious pair hotel wife trend legend enter dust feed gun scheme need tone tool current glove genre bus",
  "divorce fault rule unable wall grunt carry property solar peanut romance situate child love glove curtain must custom dry shallow crowd fee romance crack",
  "clarify magnet clutch they intact damp valid sad label limit identify script spring picnic access cave tone side dutch hazard brand jewel resemble cupboard",
  "payment enhance wild common trial grab assist scout opinion cloth spike voice ribbon come guide mushroom arch short angry cliff cheap move churn diet",
  "identify protect cement gap dream reopen grace more net sibling juice violin job vintage sniff sea dawn pigeon deputy daring diamond secret concert cream",
  "term crumble bunker marble logic primary potato capital render stone income deliver quantum wheat notable scorpion snack skull shuffle multiply skill parent anchor outdoor",
  "medal require same start spy ocean metal identify throw slush fancy task usage agree time crane cook magic satisfy also random brush left odor",
  "pioneer plastic junk coral appear bridge race essay material urge sell water wrap awkward mad cousin column innocent weasel decade science pink upset harsh",
  "group fury clip direct dance forget foil milk width zoo pole curtain luggage credit knife very scorpion jungle woman next random unveil rain hospital",
  "bean height december claw path famous wool elephant debris museum oven umbrella process teach brick flower absurd animal still impact upgrade loud girl gym",
  "cheap organ clip speed alarm wide body swap always vague amateur erode round nose divorce host famous prevent more argue tail estate claw orchard",
  "steel fault fire vacuum round promote velvet blouse device toy hunt piano stool viable album either position step fire lava glory lizard rely loan",
  "holiday wheel fox board slot february fame skirt case insect buddy grab royal bid exchange crop ocean grunt spare veteran escape solar random cabbage",
  "catalog token behind fish skill better van cage virtual theory gauge wash three holiday tiger blade business exclude liquid fat brother crime surface shoot",
  "retreat usage basic peanut pony cancel antenna flash slush weasel vicious aspect broccoli minute era evoke order discover bleak mention grace onion cannon type",
  "engine unveil critic common sauce wolf logic toy attract fish luxury broccoli all wisdom decline priority foam left risk spring fog parrot hold blouse",
  "light argue ugly pipe tree spend bullet release shove exhibit frown arctic dust knee merit material amateur minor kiwi you milk shrug fashion lady",
  "fluid birth slam clay silly fox term wide economy frequent game test core proof kiwi much deposit predict village record predict glad stem manage",
  "chapter mosquito punch winner glare figure father raven slice upper require owner whale lawsuit clutch husband slice embody twenty bubble express slow essence result",
  "equal network glory bubble circle curious slim umbrella mind office scrap journey increase again shoe luxury young gift october angle cloth before orphan tuition",
  "hamster ankle emerge kid decade guess document boring empower churn fun pistol man brother scorpion cheap bag impose myself fever future trim describe feed",
  "theory proud enrich food secret gorilla mistake first field inherit forum bullet abandon gas crucial twin faculty document hello giraffe boost common soft sign",
  "health will ritual sweet unit reunion stock height anxiety slam receive accuse wide front rebel stool survey three state stamp owner notable under essay",
  "consider cheap buddy two dilemma hold broom camera puzzle that until good kite tenant brush hand tube winner utility error input order sausage puzzle",
  "ring tiny virtual flush muffin depend add squeeze easily cart harvest meat law actor again because exchange lock city dream curtain fence suit sustain",
  "lumber maid critic transfer glance spawn observe glare calm soccer garbage city win gather front ask dirt monster clown february rigid leopard seminar give",
  "bulk pear eight sell thumb orbit length float design dish snap hope render peace member have skin layer flame rack slight tray hurt kite",
  "reflect predict afford kit stereo all renew limit leaf lion hard avocado ask slow icon correct almost loud drift dad tourist decade chest artist",
  "bag release top tell amazing engine leave stem pottery insane order tell aim people body breeze chef divorce grow object trip amused imitate drama",
  "file amateur hour sock chef question anxiety bomb virus setup lottery source caught flee clerk merry parade dog that gravity piano essence cash spare",
  "mix fame waste daughter shoe culture rifle giggle lift cannon among because jacket host year suffer permit lady happy hospital maid parent chaos remember",
  "violin neglect erosion bid citizen medal crime belt farm provide topple demand flat arrest force negative access grow they rich error analyst scissors fire",
  "answer liar funny chronic hurt initial cushion shield cram erode bind razor plunge strong bar hotel assault pepper initial mango party curious wrap congress",
  "rug toast face spin step wrap cactus apple pilot amateur start absurd island any erosion vote sport panda cube check month where club omit",
  "roof ten palm tuna series rival claw empower desk that giant check plug suspect kick moon company submit divert tumble heart stem funny join",
  "humble virtual slot visit fold achieve video caution engine miss release help verify online receive remain friend vivid bitter fruit tourist lawsuit tooth culture",
  "jaguar viable law claim inspire shiver kite exile tray child ten age raw welcome brave monster bottom gym mix parade horn wrestle negative ignore",
  "stable soccer family vast agree unknown priority tank game immune humble forest express olympic half galaxy curve label agree ten deal crawl violin street",
  "stuff room usual baby receive miss spy sheriff drill music say truck news birth myth praise airport fat index oak opera canoe hawk filter",
  "drastic total else distance olive mom fox explain elder world beyond render jeans document possible pitch away corn drift motor relief attend plug feature",
  "travel found window obey scale response brief settle token stick dignity broom opinion later antenna vault planet neither celery reward drill recipe relax breeze",
  "knock knock stairs immune useless left split mistake crawl apology cradle settle supreme bubble oblige rural latin exist region good swift control injury push",
  "brand donkey planet culture taxi danger zebra during easily bag rule supply mother sail assist concert web mule whale once leopard relief misery army",
  "pen mechanic nuclear impulse clever tail reduce proud learn rate father ask tackle canyon chalk kangaroo chaos arena own refuse assume clip credit plunge",
  "noble bulk dress wisdom apology dress hill alcohol trial ankle sail sort dismiss rally enemy table off general retreat monitor piano rug jump cost",
  "color viable degree artist common belt empty kind initial device innocent welcome eight bar mention spawn slogan slim oven blade marriage sword install payment",
  "produce faculty hurdle easily castle must age surge wolf devote tonight safe cheap doctor neutral there fly analyst piano giggle milk trigger letter degree",
  "jungle bamboo crucial morning zero tip furnace volcano uniform warfare motion recipe bulb stage opera common invite indoor smooth close brush time man fever",
  "congress public wait gain planet month ribbon gloom wood olympic action upper burden month antique assault firm two emerge expand orphan seminar warrior enrich",
  "drift author kiss window delay obscure discover flee marriage order journey measure upon upset wild three mansion relief aunt media satoshi night erase provide",
  "brief divert burger ozone attract believe nice install doctor echo admit suffer razor rebuild atom dry air then twenty because crawl piano dust elbow",
  "build series tumble happy dish stomach smart ball trim claw imitate truly wisdom leave secret excite what mansion search repeat salon scale arch ritual",
  "time text affair jewel ginger train clean marriage boil predict tag arch aisle mystery goat silk fitness stool between glance air panda dumb valid",
  "news bomb butter naive above task situate bone zero skate stool unlock flame left worry gaze matrix mobile soul carbon jar response timber witness",
  "space cry fluid record tank uniform render someone liquid gaze manage trend kid brother helmet nuclear carry topic only satisfy multiply ivory chronic inflict",
  "castle hobby expand warfare gift cube manual sock raven gesture champion album govern gap service patch mean traffic loan jazz mammal damage around trip",
  "drift retreat gather demise track choose pulp domain doctor prosper best army affair tourist elegant win scene goat jazz novel frost joy ladder zone",
  "dad bullet kind that fashion design fatigue rare wing museum pudding modify sentence tooth interest zone oblige episode object fade deliver select seat sort",
  "curtain tank kiss lawsuit ball scorpion now swallow company range boy clog muffin budget deliver eye solution climb mushroom tuition dune funny sponsor shell",
  "easily winter skill simple connect supreme noble coral oil census stay toward reject inhale always used fetch limb quit photo virtual age pledge alone",
  "occur syrup talk border outer train muffin test exhibit place sphere mouse project tonight replace turkey detect scene gift ostrich vintage lend sort wave",
  "client crew guitar detail dentist worry void ramp song enter skate tourist regret girl slow when ankle funny pioneer kitchen derive force wet subway",
  "isolate scout language baby topple inside once side tower couple mesh budget clip catalog allow warfare dutch extend health truly slim shaft develop pottery",
  "elevator bitter toddler ghost click hawk stove mystery knife critic roof artwork blade maid brand energy tail hello mask letter finish example broom charge",
  "rapid veteran there arrive will crater silent arena renew account anchor uncle suggest practice miss scissors liquid lonely hour fringe park flavor swallow young",
  "foam judge impose public reason trigger feature dress fashion logic way taxi piece tackle surge option spin sunny puppy cram biology toward divorce fence",
  "world novel glass time network code embody borrow lounge rail office giggle fringe recycle upon goose stock angry certain dinner around pizza merge solution",
  "tomorrow patient property year hello sing ski potato march razor intact session audit absorb eight struggle bubble deputy bracket electric rebel valley nice seminar",
  "laugh measure depth question setup army ill creek goddess private candy glance orient run coffee ride reward fury swing party blind demise immune series",
  "tank sure glide veteran olympic room ski half admit obtain expect attend dizzy warrior firm outside razor helmet tool kitten twenty guide word very",
  "switch diary hurt humble crime gown ridge shiver color glue giggle wrap prevent monster limb patrol group news bitter palace soda attack truly fence",
  "unaware giraffe orange fault three essay calm elite gold elevator scorpion smile crystal net right advance episode card opinion brain crucial indoor purchase clog",
  "snow room affair six cloud film prosper game hand news frame stairs rookie habit trigger anchor vehicle wild this foot stairs rare parrot one",
  "cricket display typical pencil present laugh start illness junior move absurd balance oval scrap ignore hub execute first romance swamp avocado glimpse vocal bag",
  "side dish stable pact cave lamp flash such dust injury embody hello party length warm box gold man figure choose certain dragon dirt proud",
  "seminar coin unable lab puzzle sea rely organ system cruise debris senior quit liberty onion salute work front oxygen program pledge head bar brother",
  "brain retire talk exist derive target step sentence first soft noble oven false very thought example book gallery urban enable purpose spin minute insane",
  "tuition garlic ceiling salute hurry movie drip dumb ancient chef struggle sea select avocado reveal believe mom dragon unlock spike zebra fever bread come",
  "pony valve purse bean truth faint bamboo prepare lottery loan mule private situate orchard harbor often chair limit section harbor trash actual purchase gift",
  "absorb soft cloud age famous earn rebuild pencil lottery profit planet meat giraffe ice online clutch play decorate right media craft cactus soda paper",
  "supply ramp obey result cake board library sausage cave observe design exclude interest very junk world call reveal virtual day learn trouble allow series",
  "derive brown steak prize mystery pottery script right duck blossom please umbrella gun seat alarm crumble one egg supreme annual heavy now engine project",
  "opera unknown oil private usage gorilla seek area liberty exchange exhibit trumpet fossil puppy tonight believe cycle easily brush garden such entire park habit",
  "mule bid chimney enrich glimpse scan dawn electric balance aim vibrant daring stumble drastic lava lunch amount ice quote begin false insect coyote cattle",
  "keen scout satoshi file involve gather unknown chaos lift cream spot cost narrow churn afford visit layer syrup broom napkin awful mouse dog magnet",
  "guess affair grocery artist noise zero female undo chronic rely boat squeeze already scissors crucial robot inch diet adjust there sight squirrel drill series",
  "together orange analyst forget rail hire eyebrow album because onion ginger subject arrow demand mistake panic steak fade entire quantum elbow fuel visual unknown",
  "hub physical salt hint blood bounce cushion believe regret cross valley vital legal rather slight source faculty pioneer plate donate olive robot swift rule",
  "crater mosquito genuine dilemma increase focus void jazz august antique wear quit add excess smoke remain crumble hand planet stuff wood radar nasty tooth",
  "daughter custom depth resource join upgrade auto library airport galaxy reduce bird milk occur box arrive system other initial icon rival ridge forum neither",
  "pepper fix file labor mean idea debris price among cheese hill column neglect alter illegal excuse electric accuse primary mouse slush law peace color",
  "glow timber write credit duck border horse point message only mobile swear rebel lobster volume human erase swamp liquid march door extend profit feature",
  "ill charge tunnel yellow accident critic media cinnamon push innocent option hurt exchange donkey tower soccer spider input blind indicate crouch height iron sample",
  "endorse insect matter science kiwi topic floor elbow enter voice lake dinosaur upset hurdle lift awkward guess kiss walk abuse bullet movie slush purpose",
  "letter castle rescue lemon bag obey feel crawl host south stove outer blanket offer exotic awake soup social blade donor force expect twelve sea",
  "into amount fog next lonely goddess ladder camera already lunch purse syrup typical hospital account sick luggage limit usual define viable wear unveil chat",
  "celery cupboard cannon couple ivory bonus cliff tunnel battle address razor film either news ability hire response cheese champion advice curious fetch trade critic",
  "easily negative notable such bright trust cash brain afford will raw width gossip kingdom material enact net finish rent between fall shrimp enough that",
  "infant shrug human manage upper potato advice present update grief priority asthma boss talk pizza that abandon save busy congress loud ladder later dish",
  "inch silent minute maze tiger express rebel canyon upon name april virtual again rack disagree patrol time cross lecture hair prosper swift clump soap",
  "jeans stumble bar thing swarm rail traffic join wet cannon version funny paddle ridge jump tiny dress fetch jewel slight chief inside bright brown",
  "wasp crop prison ripple harvest fortune forum awesome title expire arrive input flock indicate elbow coach nation tip segment soft learn buzz west radar",
  "lunch pair into next end token tissue like blood ginger horse wink stick chimney hill pen van endorse guide couple few suggest sauce people",
  "crawl ceiling give super accuse essay mystery tenant three lonely melt bulk suffer cupboard girl enough payment kiss legend extra actor wrist prefer balance",
  "party bind just acid best decline direct remind ship ring mix catch below such bargain limb worth raise because holiday drama mountain purchase spoil",
  "okay fever attend purity garage speak year pattern purse orphan section twin vote impulse base ripple attack attract faith plate august weasel road trip",
  "rice exhibit sausage height tube code throw allow device prosper choice best clip evil season rice squirrel subway maple ask boring skull fly define",
  "error silk fetch pottery people chronic idea sudden icon duty owner report cart economy honey bench remember logic maid battle mirror sudden artist thrive",
  "ordinary coral junior margin address smile motor scale pair mean weasel upset domain main guitar submit lady gun topple grant wife era strong good",
  "false aim cactus horn scorpion discover normal neck garment lobster lake nature surround target feed tag hover frozen special lounge vanish try hood mansion",
  "void message urge zero ring stock salute claim hover rice neither scare pass replace avocado region remind can clerk strategy egg cloth rate steel",
  "edge same initial lift harbor reveal trial unfold shrimp cinnamon same vacuum cat opera reform vehicle town east gadget inform opinion banner large script",
  "wheat rural march below foil negative fog bright prepare owner spawn firm end member strong lonely author awake flash dutch verb game polar celery",
  "rookie away twist ten learn square ozone satoshi village island mandate often inside antenna attitude wool dish squirrel view february shift bone angle pretty",
  "cattle blush frozen aspect fatigue van punch second material isolate skin weekend tree adapt canyon magic say arm alert tattoo acoustic carry plastic recall",
  "approve dinosaur begin unlock potato east cross cash delay bronze tumble trial bundle song alter odor pepper slush kind nature relief key middle scrap",
  "vintage cream task marriage merry wood palace merry father abuse south tent broom twelve pudding bunker paddle recycle erase museum joy donkey diesel sand",
  "main world quantum coyote sample smoke announce window level ranch link between govern thank genuine orchard material miss morning category pulp easily search then"
];

const whales = [
  "ride essence hawk ethics riot carry mimic quote digital seat dune sugar execute pink maximum rate chaos assume arch bronze fee bridge enact tunnel",
  "expand pill sunset hidden good rookie afford better spoil dirt index knee earn arrest insane board pumpkin loan soldier bread atom wish believe ball",
  "suit inject skull swear monkey total secret question crawl arm bachelor exile time level fall gold voyage ticket artefact join record duty thing special",
  "announce limit rug rely level double tunnel jar cloth light endless canyon solar gloom hazard little bracket festival stem solve divide witness pretty two",
  "south nation shoot unknown outside invite grain advance derive drop moon barrel tooth hazard cigar warrior velvet unaware rib flight much gravity prison suffer",
  "draw casual basic cool accident tent cabbage dolphin radio electric ostrich knock usage stick number scene lamp neck peanut intact kingdom indoor axis scrap",
  "clay guilt print rival cupboard lock pair similar early enemy insane write spoon unique game milk friend day enter stomach jazz fiber jazz game",
  "fragile umbrella length horse shoot rhythm harvest educate kiss glide observe invest trust sauce goat note brisk winter pistol glance laugh icon call chuckle",
  "combine toddler baby pull wreck tool young dune music radio upper ridge civil victory avocado scorpion deer survey street ankle level ill happy crucial",
  "arm owner actress cupboard calm balcony consider cute rebel diagram combine dream toward life ordinary say that taxi jeans surge can dirt interest battle",
  "disorder reward setup warfare few fog sail town sphere output salt debris fruit multiply across stumble argue viable open together enable voyage reopen hurdle",
  "place perfect lounge avoid wrist village nose winner loyal smooth unit duck equip arrest check there eternal when frequent spoon mixed gorilla marble ancient",
  "enrich antenna defy stumble wreck method pink plate rotate cloth surprise disease slush stick surround door walk course october frozen fun bunker leader move",
  "plug awful follow wink income defy vehicle hip relief enroll grief forum execute fame nature twelve task such casual diamond else section success sock",
  "cluster crazy switch mobile way smile execute equal style burger fitness base ancient deliver uncover clarify remain keep shy train sister tail cliff ride",
  "other dinner danger must hour amateur series develop jump snow heavy mixed test priority annual hybrid huge vessel illegal aware day snack erode cause",
  "shine right stick rose boss scrap boring umbrella people remember scorpion model load tiger script velvet supreme tooth shallow category churn arctic kangaroo because",
  "daring public congress edge neither mechanic trade apart young space episode inquiry busy pass satoshi rival stairs there brown steel confirm biology grant rubber",
  "pigeon junior air senior strike spell brief door submit skin peace job degree link runway hat tragic injury dawn gospel melt fade spider enforce",
  "crack foot figure loan position slice bleak album like repair tissue arrest escape property track night dry flavor public shy upset alcohol spoon invite",
  "person evolve slight envelope transfer bus make fresh quantum record more mobile swing kid chronic soup detail divorce half biology battle satisfy say add",
  "truck swallow pulp diary tackle garbage federal unhappy kangaroo maid strategy magic private sell clock question issue giant fiscal armed sustain rack enrich ancient",
  "primary cute inform fringe firm inspire few people phone easy donkey scrub cover size acquire scorpion sniff essay flip save dismiss organ ten size",
  "boy supreme lawn profit organ wheel runway cradle inside swap leopard trust muscle warm private twice pipe breeze question spoon sphere worry quiz life",
  "frown you kingdom thing fold salute extra giant arrest snake include cigar tuition chase fever raven indoor gentle skin jeans draft find judge girl"
];

// Constants for placing orders
const DEFAULT_GOOD_TIL_BLOCK_BLOCK_BUFFER = 16;
const EQUAL_LIKELIHOOD_NUM = 50;
const ALL_MARKETS_LIST = ["AAPL-BTC", "NVDA-BTC", "TSLA-BTC"]

function getRandomWaitTimeWhales() {
  const minWaitTime = 10000; // 10 seconds in milliseconds
  const maxWaitTime = 1500000; // 25 minutes in milliseconds
  return Math.floor(Math.random() * (maxWaitTime - minWaitTime + 1)) + minWaitTime;
}

function getRandomWaitTimeRegular() {
  const minWaitTime = 10000; // 10 seconds in milliseconds
  const maxWaitTime = 1500000; // 25 minutes in milliseconds
  return Math.floor(Math.random() * (maxWaitTime - minWaitTime + 1)) + minWaitTime;
}
function getRandomWaitTimeSmall() {
  const minWaitTime = 10000; // 10 seconds in milliseconds
  const maxWaitTime = 1500000; // 25 minutes in milliseconds
  return Math.floor(Math.random() * (maxWaitTime - minWaitTime + 1)) + minWaitTime;
}

function getRandomBaseOrderSize(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getWhaleRandomBaseOrderSize() {
  return getRandomBaseOrderSize(1000, 5000); // random base size between 1000 and 10000 
}

function getRegularTraderRandomBaseOrderSize() {
  return getRandomBaseOrderSize(50, 200); // random base size between 50 and 200 
}

function getSmallTraderRandomBaseOrderSize() {
  return getRandomBaseOrderSize(5, 15); // random base size between 5 and 15 
}

function getRandomDelay(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function launchWhales(priceFetcher, orderbookKeeper, multiMarketSentiment) {
  const whaleActions = [
    { count: 2, action: 'tradeMarketWithSentiment' },
    { count: 1, action: 'tradeBuyMarket' },
    { count: 1, action: 'tradeSellMarket' },
    { count: 4, action: 'tradeArbitrageSpot' },
    { count: 1, action: 'tradeMarketAtRandom', arg: EQUAL_LIKELIHOOD_NUM },
    { count: 1, action: 'tradeBalanceBook' }
  ];

  let whaleIndex = 0;
  for (let { count, action, arg } of whaleActions) {
    for (let i = 0; i < count; i++) {
      const mnemonic = whales[whaleIndex++];
      const loopWaitTime = getRandomWaitTimeWhales();
      const baseOrderSize = getWhaleRandomBaseOrderSize();
      const trader = new MarketTrader({
        multiMarketSentiment,
        orderbookKeeper,
        priceFetcher,
        loopWaitTime,
        goodTilBlockBuffer: DEFAULT_GOOD_TIL_BLOCK_BLOCK_BUFFER,
        mnemonic,
        baseOrderSize,
        minLoopWaitTime: 10000,
        maxLoopWaitTime: 480000,
        markets: ALL_MARKETS_LIST
      });
      await trader.initialize();
      if (arg) {
        trader[action](arg);
      } else {
        trader[action]();
      }
      await delay(getRandomDelay(0, 500));
    }
  }
}

async function launchRegularTraders(priceFetcher, orderbookKeeper, multiMarketSentiment) {
  const regularTraderActions = [
    { count: 15, action: 'tradeMarketWithSentiment' },
    { count: 2, action: 'tradeBuyMarket' },
    { count: 4, action: 'tradeSellMarket' },
    { count: 20, action: 'tradeArbitrageSpot' },
    { count: 2, action: 'tradeMarketAtRandom', arg: EQUAL_LIKELIHOOD_NUM },
    { count: 1, action: 'tradeBalanceBook' }
  ];

  let regularTraderIndex = 0;
  for (let { count, action, arg } of regularTraderActions) {
    for (let i = 0; i < count; i++) {
      const mnemonic = normalTraders[regularTraderIndex++];
      const loopWaitTime = getRandomWaitTimeRegular();
      const baseOrderSize = getRegularTraderRandomBaseOrderSize();
      const trader = new MarketTrader({
        multiMarketSentiment,
        orderbookKeeper,
        priceFetcher,
        loopWaitTime,
        goodTilBlockBuffer: DEFAULT_GOOD_TIL_BLOCK_BLOCK_BUFFER,
        mnemonic,
        baseOrderSize,
        minLoopWaitTime: 10000,
        maxLoopWaitTime: 480000,
        markets: ALL_MARKETS_LIST
      });
      await trader.initialize();
      if (arg) {
        trader[action](arg);
      } else {
        trader[action]();
      }
      await delay(getRandomDelay(0, 500));
    }
  }
}

async function launchSmallTraders(priceFetcher, orderbookKeeper, multiMarketSentiment) {
  const smallTraderActions = [
    { count: 35, action: 'tradeMarketWithSentiment' },
    { count: 4, action: 'tradeBuyMarket' },
    { count: 4, action: 'tradeSellMarket' },
    { count: 45, action: 'tradeArbitrageSpot' },
    { count: 4, action: 'tradeMarketAtRandom', arg: EQUAL_LIKELIHOOD_NUM },
    { count: 4, action: 'tradeBalanceBook' }
  ];

  let smallTraderIndex = 0;
  for (let { count, action, arg } of smallTraderActions) {
    for (let i = 0; i < count; i++) {
      const mnemonic = smallTraders[smallTraderIndex++];
      const loopWaitTime = getRandomWaitTimeSmall();
      const baseOrderSize = getSmallTraderRandomBaseOrderSize();
      const trader = new MarketTrader({
        multiMarketSentiment,
        orderbookKeeper,
        priceFetcher,
        loopWaitTime,
        goodTilBlockBuffer: DEFAULT_GOOD_TIL_BLOCK_BLOCK_BUFFER,
        mnemonic,
        baseOrderSize,
        minLoopWaitTime: 10000,
        maxLoopWaitTime: 480000,
        markets: ALL_MARKETS_LIST
      });
      await trader.initialize();
      if (arg) {
        trader[action](arg);
      } else {
        trader[action]();
      }
      await delay(getRandomDelay(0, 500));
    }
  }
}

async function main() {
  const priceFetcher = new PriceFetcher();
  priceFetcher.startFetching();
  await new Promise(resolve => setTimeout(resolve, 12000));

  const orderbookKeeper = new OrderbookKeeper({
    markets: ALL_MARKETS_LIST,
  });
  await orderbookKeeper.initialize();

  const multiMarketSentiment = new MultiMarketSentiment(ALL_MARKETS_LIST);

  launchWhales(priceFetcher, orderbookKeeper, multiMarketSentiment);
  launchRegularTraders(priceFetcher, orderbookKeeper, multiMarketSentiment);
  launchSmallTraders(priceFetcher, orderbookKeeper, multiMarketSentiment);
}

main();
import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊":
    "Smiling Face With Smiling Eyes-Is grinning shyly and embarrassed. The red cheeks are an expression of joy. Represents happiness, contentment, peace of mind and gratitude.",
  "😇":
    "Smiling Face With Halo-Would like to express its (possibly pretended) innocence. Someone does good deeds, is very sweet, innocent and behaves in an exemplary way. The angelic face can also be used humorously for rather not so good deeds or behaviors.",
  "🙂":
    "Slightly Smiling Face-A light smile means you are satisfied with yourself and the world. Can make a statement sound friendlier than it might have been meant. Or have a sarcastic meaning when a smile does not actually fit the content.",
  "🙃":
    "Upside-Down Face-Don't take me seriously! The message is either ambiguous, ironic or joking. Person plays the fool and horses around, or in response to a joke.",
  "😉":
    "Winking Face-Smiley blinks mischievously with one eye. Expression of humor, has been pulling a practical joke, is flirting with you or has an ulterior motive. The wink weakens the message: do not take it seriously, regard it as humorous.",
  "😌":
    "Relieved Face-Everything went well! Relieved smiley face. Is happy that something unpleasant is over without having caused any harm. Relaxed, thankful and free of worries.",
  "😍":
    "Smiling Face With Heart-Eyes-Happily beaming face with heart-shaped eyes.",
  "🥰":
    " Smiling face with smiling eyes and three hearts-You are in love, sitting on cloud number nine. The romantic emoji with the enamored expression of the face stands for affairs of the heart.",
  "😘":
    " Face Throwing a Kiss-Smiley sends you a loving kiss that comes from the heart. Amicable, to express affection or with romantic intent, as an expression of love. May weaken a sarcastic response or be a reaction to a rude message. Symbol for flirting and showing gratitude.",
  "😗":
    "Kissing Face-The face sends kisses to another person. The open eyes and the neutral face are not so much a sign of an intimate kiss but rather a kiss to a friend or relative. “Thank you“, “Hello“ or “Goodbye“. ",
  "😙":
    "Kissing Face With Smiling Eyes-Relaxed face expression, smiling eyes and kissing lips. A kiss to friends or “We hug and kiss you“ to relatives. Can also be used for whistling.",
  "😚":
    "Kissing Face With Closed Eyes-Cute face with closed eyes and rosy cheeks. As a thank you for a tip or a favor. Loving kiss to the closest friends, family or darling.",
  "😋":
    "Face Savouring Delicious Food-Bon appetit! Smiley is licking the corner of its mouth with its tongue. Is hungry, just cooked something very delicious or eaten a whole dish. Often interpreted as a grimace, with tongue outstretched, and used after a funny message or when fooling around.",
  "😛":
    "Face With Stuck-Out Tongue-Horseplay with friends, weakening an ironic remark and making sure that the other does not take seriously what has been said. Making fun of others: I knew you'd screw it up.",
  "😝":
    " Face With Stuck-Out Tongue & Tightly Closed Eyes-Making fun of someone, annoying or jokingly offending someone. In provocative news, crude or black humor as well as with glee.",
  "😜":
    "Face With Stuck-Out Tongue & Winking Eye-Smiley boldly sticks out the tongue, winking with one eye. Has made a joke or wants to flirt with the chat partner. Is carefree and does not mean it seriously.",
  "🤪":
    "Crazy Face-Something is insanely funny. The mood is exuberant - you are totally silly and crazy. Totally freaking out with enthusiasm or joy. Maybe someone has even told an indecent joke.",
  "🤨":
    "Face With a Raised Eyebrow- With the questioning look on the face, resembles the actor 'The Rock' (Dwayne Johnson). Can be used to express skepticism, disbelief or disapproval.",
  "🧐":
    "Face With Monocle- A monocle is a visual aid with only one glass. At the end of the 19th century it was a status symbol. Something seems suspicious! The smiley makes a warning look around. The “upper-class“ version of the pondering smiley.",
  "🤓":
    "Nerd Face-Huge glasses, awkward smile and buck teeth. Used humorously or ironically for nerds or to express how smart you are. Stereotype of a nerd; a smart but funny-dressed person with social deficits.",
  "😎":
    "Face With Sunglasses- I'm the king of the world! Mr. Cool Smiley with sunglasses. Is totally self-assured and relaxed. Everything is absolutely easy and cool. Also a symbol for sun, summer holidays, and holidays on the beach.",
  "🤩":
    "Smirking Face With Starry Eyes-Is very excited about something and already full of anticipation. Overwhelmed and speechless after meeting someone you like a lot. Fascinated by the glory and the world of the stars.",
  "🥳":
    " Face with party blower and party hat-That was a wild party or “Let's celebrate“. No matter what joyful event is in view, it will be celebrated appropriately. May also stand for the carnival season.",
  "😏":
    "Smirking/Whimsical Face- Half a smile that oozes with complacency. Represents irony, coolness or playfulness. Be careful: Somebody could be up to something. Used as an offensive look for flirting or sexual innuendo.This seems to me to be an I don't care emoji or an expression ",
  "😒":
    " Unamused Face- The grumpy, sullen gaze expresses dissatisfaction. Is not enthusiastic about a thing and shows that. Expression of disinterest and disapproval.",
  "😞":
    " Disappointed Face- Face is drooping and directed downwards. Smiley is very sad and frustrated and gives a disappointed impression. Represents sorrow, remorse and regret.",
  "😔":
    " Pensive Face- A pensive expression on the face. Emoji looks downwards and needs time to think. Represents melancholy, general dissatisfaction and frustration.",
  "😟":
    " Worried Face- Worried looking face due to a complicated situation or important event. Feels anxious, insecure and uncomfortable.",
  "😕":
    "Confused Face- Is confused or does not agree with something. Is uncertain or disappointed, had imagined this in a different way.",
  "🙁":
    " Slightly frowning face- I’m sorry to hear that“ or „What you’re saying annoys me a little bit“. The frown can show rejection and anger or a person is surprised, anxious.",
  "😣":
    " Suffering Face- Emoji is struggling and suffering. After a hard day, ready to throw in the towel. However, has to endure the situation and will have worked it through some day.",
  "😖":
    " Confounded Face-How on earth could that happen? Smiley is extremely dismayed and bewildered. Or damn angry: That's almost the final straw!",
  "🥺":
    " Face with begging eyes- The big eyes are shining, devoted facial expression. The emoji is entreatingly begging for something: wants to borrow some money or the car. If you cannot get ahead by asking for something, puppy dog eyes are the last resort to get what you want."
};
/*
😫 Tired Face
Overtired emoji with narrowed eyes and open mouth. Because of too little sleep, because of what is going on around you, from a person or situation. Is very exhausted and broken. Now needs peace first. 	U+1F62B
😫 Add meaning
Smiley is listless Whatsapp U+1F629	😩 Weary Face
Leave me alone! Reluctant smiley with raised eyebrows and mouth downturned, moaning about grueling, unpleasant but inevitable things. Is weepy, upset and completely exhausted, mentally or physically. 	U+1F629
😩 Add meaning
Sad face with big eyes U+1F97A	🥺 Face with begging eyes
The big eyes are shining, devoted facial expression. The emoji is entreatingly begging for something: wants to borrow some money or the car. If you cannot get ahead by asking for something, puppy dog eyes are the last resort to get what you want. 	U+1F97A
Sharanya
So sad that the eyes are filled with tears reflection in it. Also shows a "pity on someone feeling".

🥺 Add meaning
Emoji drooping eyebrows Whatsapp U+1F622	😢 Crying Face
Smiley with drooping eyebrows is sad and crying. A tear drop is running down the cheek. A picture of misery. Not so much general sadness, but rather pain over one thing. It still hurts to remember a certain event. 	U+1F622
😢 Add meaning
Smiley crying heavily U+1F62D	😭 Loudly Crying Face
Emoji is both very sad and distraught, or is dying of laughter. Tears are pouring out of the eyes like a waterfall. Represents injury, pain or defeat. Is also used ironically or something is so funny that you die of laughter. 	U+1F62D
😭 Add meaning
Triumphant Emoji Whatsapp U+1F624	😤 Face With Look of Triumph
White steam clouds are coming out of the smiley's nose. Is snorting contemptuously as a sign of superiority. Is proud and triumphing over someone else. 	U+1F624
Sharanya
Is very angry at something and steams out of the nose.

😤 Add meaning
Angry Smiley  Whatsapp U+1F620	😠 Angry Face
Smiley is upset, angry, and totally furious. Reaction to something unfavorable or a sign of rejection. You had better keep out of the person's way. 	U+1F620
😠 Add meaning
Pouting Smiley face U+1F621	😡 Pouting Face
The pouting face expresses displeasure with a person or situation. Beware, danger of explosion! Furious emoji face. Is annoyed and already sulking with a deep-red face. 	U+1F621
😡 Add meaning
Symbols over mouth smiley U+1F92C	🤬 Face With Symbols Over The Mouth
The symbols over the mouth represent cursing. The serious-looking smiley is really upset and keeps using four-letter words. Represents a sudden outburst of fury or frustration. 	U+1F92C
🤬 Add meaning
Head explodes U+1F92F	🤯 Face With Exploding Head
I cannot believe it. or “That will blow you away.“ Something is very exciting or surprising. The exploding head can also be used to express shock or awe. 	U+1F92F
🤯 Add meaning
Blushing Whatsapp Smiley face U+1F633	😳 Flushed Face
Person is shocked, in an uncomfortable situation or has made a mistake. Expresses shame; something is very embarrassing. Reacts to a compliment or a flattering message that the person did not want to receive. 	U+1F633
😳 Add meaning
Red face with bead of sweat U+1F975	🥵 Overheated face
It is so hot, I will get a heat stroke right away! Bright red head, the tongue is hanging from the mouth and drops of sweat are on the forehead. The hottest place in the world lies in Iran: In 2005, the highest temperature of 70.7 °C was measured in the Dasht-e Lut desert. 	U+1F975
🥵 Add meaning
Blue face U+1F976	🥶 Freezing face
It is so cold, you are about to freeze to death. The smile is almost frozen. Already totally blue in the face from the cold temperature, tortured facial expression. Only a cup of tea, coffee, or the hot tub can help now. 	U+1F976
🥶 Add meaning
Whatsapp Smiley is frozen in fear U+1F631	😱 Face Screaming in Fear
Horror-stricken face with two hands, screaming. Is scared stiff, feeling nothing but fear and panic. The creepy emoji can also be used ironically or as a symbol for Halloween. 	U+1F631
😱 Add meaning
Smiley is scared Whatsapp U+1F628	😨 Fearful Face
Scared smiley is frightened and stunned. Seems to be deeply shocked and surprised by an ominous event or intense experience. 	U+1F628
😨 Add meaning
Shocked smiley with drop of sweat U+1F630	😰 Face With Open Mouth & Cold Sweat
Smiley with a blue forehead is shocked and worried. Cold sweat is dripping from the forehead and the mouth is open, dumbfounded. Sweating due to physical or mental stress. 	U+1F630
😰 Add meaning
Disappointed smiley Whatsapp U+1F625	😥 Disappointed but Relieved Face
Is relieved that something is over, but also disappointed. Has experienced a stressful situation with an unpleasant outcome, for example, a test. Has gotten out of a difficult or delicate situation, but not without bumps and bruises. 	U+1F625
😥 Add meaning
Cold sweat on forehead emoji U+1F613	😓 Face With Cold Sweat
Stress or worry about a bad experience. Things went different than they should have. The school is stressing or there is still so much to do in the office. You are tired, but still have so much work to do. 	U+1F613
😓 Add meaning
Smiley with hands before his face U+1F917	🤗 Hugging Face
Smiley with red cheeks is stretching out its hands toward you. Wants to hug you. It's an open and cordial gesture and an expression of warmth and friendliness. 	U+1F917
Vijay
I use this emoji for a friend to show her my closeness.

Patience
I use this when a friend says something I like and I want to give them a hug in return.

Anonymous
I use this to show "No probs or nothing".

🤗 Add meaning
Hand to chin smiley U+1F914	🤔 Thinking Face
The thinker's pose: Thoughtful face with the characteristic hand on the chin. Puts a statement, a person's intelligence, or an idea into question. Is mulling over something or thinking about a brilliant idea. 	U+1F914
🤔 Add meaning
Hand over mouth smiley U+1F92D	🤭 Face With Hand Over The Mouth
Expresses shock, surprise, or a sudden perception. Typical gesture, which shows that the other person is not telling the truth. Thinks he's being lied to. 	U+1F92D
Tayyaba Tuqeer
This expresses shyness. A person feels shy.

🤭 Add meaning
Shhh emoji U+1F92B	🤫 Exhorting Face
Shhh! is meant to silence others. Or someone is confiding a secret that should not be retold. Nicely telling your counterpart to shut up. 	U+1F92B
🤫 Add meaning
Long nose emoji U+1F925	🤥 Lying Face
As with Pinocchio, the nose becomes longer with each lie, which exposes him as a liar. Symbol of a falsehood, boast, or an unlikely story. 	U+1F925
🤥 Add meaning
Emoji without mouth Whatsapp U+1F636	😶 Face Without Mouth
Emoji without a mouth. Is speechless, has no words. Someone does not want to or cannot say anything about a specific topic. Used in difficult, embarrassing or bad conversations. Imagine what it would say if it had a mouth! 	U+1F636
😶 Add meaning
Blurred face U+1F636	😶‍🌫 Face in clouds
This is nebulous! The face is surrounded by fog or clouds. Those who have their heads in the clouds are either dreamy or do not want to admit reality. The view of something is blurred. There may also be a state of confusion or bliss. 	U+1F636
😶‍🌫 Add meaning
Neutral Smiley face U+1F610	😐 Neutral Face
Pokerface: Expressionless face with a neutral look. Unimpressed, awkward or indifferent. 	U+1F610
😐 Add meaning
No feelings smiley Whatsapp U+1F611	😑 Expressionless Face
Face without any emotional expression, with closed eyes and mouth. Tired, annoyed, emotionless, no patience, the end of the flagpole is reached. The right words are missing to continue a conversation. 	U+1F611
😑 Add meaning
Smiley grimaces, joking U+1F62C	😬 Grimacing Face
This is really embarrassing for me now! Expression of nervousness, awkwardness or embarrassment. Scared and guilty smile: Someone has done something stupid and tries to resolve the tense situation by grimacing. 	U+1F62C
😬 Add meaning
Lifting eyes emoji U+1F644	🙄 Face With Rolling Eyes
Smiley is rolling its eyes. Finds the current situation or a person boring or annoying. Will disregard the message. 	U+1F644
Eduardi
Emoji looks at the message above.

🙄 Add meaning
Smiley exhaling audibly U+1F62E	😮‍💨 Smiley exhaling audibly
The emoji exhales noisily. Maybe with relief (phew, that was a close thing!) or with disappointment. There is something we may not like at all. Can also mean that the day was very exhausting and now you feel fatigue. 	U+1F62E
😮‍💨 Add meaning
Smiley is speechless U+1F62F	😯 Speechless Face
Oh my goodness! The unpleasantly surprised face is lost for words due to a shocking affair. In response to bad behavior or a rude message. Nothing can be added to what has just been said. 	U+1F62F
😯 Add meaning
Whatsapp Smiley frowns U+1F626	😦 Frowning Face With Open Mouth
I cannot believe you did that! Expresses horror as well as fear, worry and mistrust. In response to a negative surprise. Got caught red-handed and just feels totally taken by surprise. 	U+1F626
😦 Add meaning
Smiley is shocked U+1F627	😧 Anguished Face
Something unexpected happened! Face with raised eyebrows, open eyes and open mouth. A mixture of shock and disappointment. Represents fear, frustration, horror and unexpected, negative surprises. 	U+1F627
😧 Add meaning
Perplexed emoji Whatsapp U+1F62E	😮 Face With Open Mouth
Wow, I'm impressed! Perplexed smiley is looking completely puzzled. Is positively or negatively surprised: from mildly astonished to completely steamrolled. 	U+1F62E
😮 Add meaning
Surprised Smiley face with an open mouth U+1F632	😲 Astonished Face
That's incredible, I had no idea! Astonished face with wide open mouth and eyes: overwhelmed with surprise, completely shocked or sheer incredulity. Can hardly believe what just happened! 	U+1F632
😲 Add meaning
Good night smiley Whatsapp U+1F634	😴 Sleeping Face
Good night and sweet dreams! In comics or cartoons, zZz above the head stands for sleeping characters. The emoji is tired, wants to go to bed or is just about to fall asleep from boredom. 	U+1F634
😴 Add meaning
Slobbering smiley Whatsapp U+1F924	🤤 Drooling Face
Slobbering face, the saliva flowing from the corner of the mouth. Represents desire for a person, delicious food, the new car, or the anticipation of an event. Expression of extreme interest and desire. 	U+1F924
Debarati
When you are extremely in love with something or someone and can't resist.

🤤 Add meaning
Tired smiley Whatsapp U+1F62A	😪 Sleepy Face
Emoji is dead tired and would love to sleep now. The bubble emerging from the nose is a typical manga symbol for a sleeping character. Or as an expression that a conversation or excursion is extremely boring and drowsy. 	U+1F62A
😪 Add meaning
Smiley face with crossed eyes U+1F635	😵 Dizzy Face
I feel dizzy! Smiley with crossed eyes and open mouth is totally dazed. Is confused and so dizzy it doesn't know which side is up. Also symbolizes strong emotions or drunkenness. 	U+1F635
😵 Add meaning
Emoji spiral eyes U+1F635	😵‍💫 Face with spiral eyes
The mouth is open, the eyes are spirals. The emoji has circulatory problems and is dizzy. Something or someone has cast a spell over us, we are hypnotized. There may be disorientation, e.g. in a foreign city or in a department store. 	U+1F635
😵‍💫 Add meaning
Smiley with zipped mouth U+1F910	🤐 Zipper-Mouth Face
Smiley with zipper instead of a mouth is keeping a secret for itself. Lips are closed or chat partner's lips should remain closed. Can also mean silence because you cannot find the right words. 	U+1F910
🤐 Add meaning
Crazy face emoji U+1F974	🥴 Face with unequal eyes and wavy mouth
Eyes half open, half closed, slanted mouth, flushed cheeks. The emoji has a confused facial expression: due to tiredness or the currently confused emotional world. Also known as drunken face. 	U+1F974
🥴 Add meaning
Disgusted emoji Whatsapp U+1F922	🤢 Nauseated Face
Disgusted smiley, which is already green with sickness and nausea. Might mean disgust, reluctance, or aversion, or stand for sickness. 	U+1F922
🤢 Add meaning
Puking Smiley U+1F92E	🤮 Face With Open Mouth, Throwing Up
I could almost throw up. Might show how drunk the person was last night. The puking smiley can also state what you think of something. 	U+1F92E
🤮 Add meaning
sneezing face emoji U+1F927	🤧 Sneezing Face
A sneezing face with eyes closed, blowing its nose into a handkerchief. I caught a cold! Shows that someone is ill or feels uncomfortable. 	U+1F927
🤧 Add meaning
Sick Smiley with protective mask U+1F637	😷 Face With Medical Mask
The mask is for protection. Either to protect yourself or others from infection. Someone is in the hospital, has to go to the doctor or has caught a disease. Wearing the masks is widely spread in Asia. 	U+1F637
😷 Add meaning
Thermometer emoji Whatsapp U+1F912	🤒 Face With Thermometer
The sad face with the thermometer in the mouth expresses illness. Caught a flu or other illness that is associated with fever. Or is worried about getting sick. 	U+1F912
🤒 Add meaning
Yawning emoji U+1F971	🥱 Yawning face
I am dog-tired! The eyes are closed and the hand covers a yawn. The night was too short, you couldn't get enough sleep. Indication that a topic or a person is not of interest, but rather boring. 	U+1F971
🥱 Add meaning
Emoji with bandage U+1F915	🤕 Face With Head Bandage
Sad looking face with head bandage: Someone is ill, had an accident, or is in hospital. The bandage symbolizes health problems. 	U+1F915
🤕 Add meaning
Smiley with dollar signs in the eyes U+1F911	🤑 Money-Mouth Face
Smiley has dollar signs in its eyes, the tongue is a banknote. Could have won something or is sensing a financial chance. Implicates a sense of wealth. 	U+1F911
🤑 Add meaning
Cowboy smiley Whatsapp U+1F920	🤠 Face With Cowboy Hat
Howdy! Typical American smiley with cowboy hat from the Wild West. Stands for freedom, nature, and hard work. 	U+1F920
🤠 Add meaning
Disguised face smiley U+1F978	🥸 Disguised face
Face with funny glasses and false eyebrows, bulbous nose and mustache stuck on. Someone wants to hide himself or their intentions. As a disguise: You want to get to the bottom of something unrecognized. Symbolic for carnival. 	U+1F978
🥸 Add meaning
Goblin emoji Whatsapp U+1F608	😈 Smiling Face With Horns
Mischievously grinning goblin smiley with small devil horns. Wants to cause trouble, is a real teaser or planning something ugly just now. 	U+1F608
😈 Add meaning
Devil smiley Whatsapp U+1F47F	👿 Goblin
The goblin is frowning, looking grim, and does not feel like joking. You should be particularly careful. Represents mischievous acts or remarks as well as treachery. 	U+1F47F
👿 Add meaning
Red Oni smiley U+1F479	👹 Japanese Ogre “Namahage“
The Oni represents a demon and spirit of hell in Japanese mythology. An ugly figure with horns, chasing evil souls. Traditional disguise on New Year's Eve to ward off evil spirits. 	U+1F479
👹 Add meaning
Red Tengu symbol Whatsapp U+1F47A	👺 Japanese Goblin
The Tengu (literally: heavenly dog) is an evil and magical being from Japan. Has supernatural powers and brings forth disaster. The red mask has eyebrows and a beard and a noticeably long nose. 	U+1F47A
👺 Add meaning
Clown emoji Whatsapp U+1F921	🤡 Clown Face
Stop fooling around! Made-up clown face from the circus world. Stands for fun and entertainment, but can also trigger fears in certain people - at least since Stephen King's horror movie “It“. 	U+1F921
🤡 Add meaning
Shit smiley Whatsapp U+1F4A9	💩 Pile of Poo
Crap, oh no! Such a sh**! The comic version of a pile of feces. Can describe a situation, replace the swear word, or criticize a statement of the chat partner. 	U+1F4A9
💩 Add meaning
Ghost Whatsapp Emoji U+1F47B	👻 Ghost
The funny-smiling ghost is too cute to frighten others or cause harm. Symbol for Halloween or jokingly for creepy things, e.g. movies. 	U+1F47B
👻 Add meaning
Skull Emoji U+1F480	💀 Skull
This is extremely dangerous! The skull emoji is used in unpleasant situations or to symbolize terrible things. Can stand for a real threat, but can also be used sarcastically or humorously. 	U+1F480
Jack
It can mean dying of laughter.

💀 Add meaning
Death's Head Emoji U+2620	☠ Skull and Crossbones
Be careful! The death's head with crossed bones is a symbol of death. A warning sign for toxic substances and hazards. 	U+2620
☠ Add meaning
Alien emoji Whatsapp U+1F47D	👽 Alien
The aliens are here! Symbol for an extraterrestrial being. However, smiles friendly and comes in peace. 	U+1F47D
👽 Add meaning
Robot emoji U+1F916	🤖 Robot Face
The mouth of the robot face resembles a grimace. It's like being remotely controlled and working like a robot. Can also be used for deadhearted people or refer to artificial intelligence and sci-fi movies. 	
🤖 Add meaning
Halloween pumpkin U+1F383	🎃 Pumpkin lantern
Trick or treat! A candle is placed in a hollowed-out pumpkin with a grimace. The Halloween tradition was brought to the US by Irish immigrants. The emoji is usually sent as a symbol for Halloween. 	
🎃 Add meaning
Laughing cat smiley Whatsapp U+1F63A	😺 Smiling Cat Face With Open Mouth
Laughing cat with open mouth. Means fun and smirking, mostly used by cat lovers. The cattiness might stand for femininity. 	U+1F63A
😺 Add meaning
Funny cat face emoji U+1F638	😸 Grinning Cat Face With Smiling Eyes
Cat face, which is in a good mood. The eyes are smiling, it's grinning broadly and very satisfied. The chat partner can have fun with this cat. 	U+1F638
😸 Add meaning
Tears of joy cat emoji U+1F639	😹 Cat Face With Tears of Joy
Cat emoji with clenched eyes and open mouth. Is enthusiastic and helpless with laughter. Something is extremely funny or silly. You are relieved and have tears of joy in your eyes. 	U+1F639
😹 Add meaning
Hearts eyes cat smiley U+1F63B	😻 Smiling Cat Face With Heart-Eyes
Overjoyed, laughing cat face with hearts on the eyes. Is very much in love or very grateful for a friendly service. Likes something very much and expresses admiration that way. 	U+1F63B
😻 Add meaning
Daringly laughing cat smiley U+1F63C	😼 Cat Face With Wry Smile
Cat is laughing daringly with boldly raised corners of the mouth. It mocks you, is sarcastic or having fun at your expense. Might fancy a flirt. However, you had better be cautious. 	U+1F63C
😼 Add meaning
Kiss cat emoji Whatsapp U+1F63D	😽 Kissing Cat Face With Closed Eyes
Cat with red cheeks and eyes closed. Its lips are pointed and it wants to kiss you. Cats have a reputation for being very choosy and tend to show affection rather reluctantly. 	U+1F63D
😽 Add meaning
Horrified cat emoji Whatsapp U+1F640	🙀 Weary Cat Face
Cat is tired and exhausted. It has got hollow, white eyes and is holding its paws next to the mouth. Needs a break right now. Reaction to something scandalous or shocking. 	U+1F640
🙀 Add meaning
Crying cat smiley Whatsapp U+1F63F	😿 Crying Cat Face
Cat face with down-turned eyebrows and corners of the mouth. A tear is running down the cheek. Just received bad news. Expression of empathy. 	U+1F63F
😿 Add meaning
Profile view cat Whatsapp U+1F63E	😾 Pouting Cat Face
Pouting face of a grumpy cat. The corners of the mouth and the whiskers are pointing downwards. Is in a bad mood, frustrated, and has turned away angrily. Known as the Grumpy Cat, a grumpy-looking cat that became an Internet phenomenon. 	U+1F63E
😾 Add meaning
Praying emoji U+1F932	🤲 Holding hands up, palms against each other
I'm praying that everything will go smoothly today or “Can you lend me some money please?“ The upturned palms represent a form of praying or asking for handouts. In American sign language, the symbol of an open book. 	U+1F932
🤲 Add meaning
Two opened hands smiley U+1F450	👐 Open Hands
The two opened hands are stretched toward the counterpart. Represents affection and openness. Could also stand for a hug. 	U+1F450
👐 Add meaning
Person raising hands Emoji U+1F64C	🙌 Person Raising Both Hands In Celebration
Hallelujah! Hands are stretched upwards to celebrate. Is having a party, dancing wildly and friskily. Is in a good mood or having a lot of fun. Can also stand for “Banzai”, a Japanese cheer that brings luck and joy for 10,000 years. 	U+1F64C
🙌 Add meaning
Clapping hands Emoji U+1F44F	👏 Clapping Hands
Bravo, very well done! Emoji shows two clapping hands. Is mostly used for expressing consent and appreciation. Can also be used sarcastically, if something truly doesn't deserve any applause! 	U+1F44F
Bellacious
I use this emoji as an appreciation and appeal.

👏 Add meaning
Handshaking emoji U+1F91D	🤝 Handshake
Shake on it! The handshake can stand for a greeting or farewell, a sign of agreement or for a deal. Two people are holding hands or, in a figurative sense, to give someone a helping hand. 	U+1F91D
🤝 Add meaning
Thumb up smiley U+1F44D	👍 “Thumbs-Up” Sign
Well done! Hand with thumb turned up. Stands for commitment, agreement and approval! Caution: In Arab countries, this is interpreted as showing the two fingers. 	U+1F44D
👍 Add meaning
Thumb down smiley U+1F44E	👎 Thumbs Down Sign
That was really bad! Thumb turned down stands for rejection, disapproval and dislike. Also known as the false death myth meaning with Roman gladiators. 	U+1F44E
👎 Add meaning
Stretched-out fist Whatsapp U+1F44A	👊 Fist Hand
The stretched-out fist means “Check!“ an encouragement. Welcome between friends or gesture of agreement. Can also be interpreted as a threatening punch. 	U+1F44A
👊 Add meaning
Raised Fist Whatsapp U+270A	✊ Raised Fist
I can do it! The raised fist implies power and strength. Stands for something you believe in. also meant as a political gesture and symbol of defiance, solidarity and resistance. 	U+270A
✊ Add meaning
Fist pointing left emoji U+1F91B	🤛 Fist Pointing Left
In conjunction with other emojis a sign of a hit. Casual form of greeting. The gesture 🤜🤛 is known as fist check, fist greeting or colloquially as a ghetto fist. 	U+1F91B
🤛 Add meaning
Fist pointing left emoji U+1F91C	🤜 Fist Pointing Right
A hand clenched in a fist pointing to the right. The hand gesture is used to greet friends as a sign of respect as well as approval or congratulation. 	U+1F91C
🤜 Add meaning
Crossed fingers symbol U+1F91E	🤞 Hand With Crossed Fingers
The closed fist with crossed index and middle fingers is used to wish someone luck. Children usually use this gesture to annihilate a promise or oath. 	U+1F91E
🤞 Add meaning
Victory smiley Whatsapp U+270C	✌ Victory Hand
No offense! Symbol of peace, which became known in the 60s by the hippies. “V” hand signal stands for victory. In Great Britain, can be seen in an insulting way as a woman with spread-out legs. 	U+270C
✌ Add meaning
ILY sign Whatsapp U+1F91F	🤟 I Love You Gesture
In the American sign language, the fist with outstretched little finger, index finger and thumb means “I love you“. The ILY sign mainly conveys a general, positive message. 	U+1F91F
🤟 Add meaning
Mano cornuta emoji U+1F918	🤘 Sign of the Horns
Rock on! Little finger and forefinger are forming horns. The metal horn is a gesture of metal rock fans. Can have many meanings, such as unfaithfulness (by horny husband/wife), sign to ward off misfortune, devil's salutation or sacred gesture in Buddhism. 	U+1F918
🤘 Add meaning
No problem symbol Whatsapp U+1F44C	👌 Ok Hand Sign
Thumb and forefinger form an O. Symbol for “Okay!“ Sign of approval, agreement or that everything is okay. Careful, in some countries it is considered offensive and insulting (“you a**hole“). 	U+1F44C
👌 Add meaning
Pinching gesture Whatsapp U+1F90F	🤏 Pinching hand
Just this tiny bit is missing! Thumb and forefinger are close together to grab a small object. Indication that something is small or only available in small quantities. 	U+1F90F
🤏 Add meaning
Fingertips pinched gesture U+1F90C	🤌 Pinched fingers
What do you want?! “Ma che vuoi” is one of the most famous gestures in Italy. Universally applicable when someone asks for something or when you wish for something yourself. The more often the gesture is used, the more impatient or frustrated the other person is. 	U+1F90C
🤌 Add meaning
Hand pointing to the left Emoji U+1F448	👈 Back Of Hand Pointing To The Left
Right this way! Trigger finger shows to the left. Is meant to point in a certain direction, indicate something or mark the important part of a message. 	U+1F448
👈 Add meaning
Hand pointing to the right Emoji U+1F449	👉 Back Of Hand Pointing To The Right
Trigger finger shows to the right. Draws your attention to something following or wants to remind you of something. Can also be an admonishing wiggling of the trigger finger. 	U+1F449
👉 Add meaning
Uplifted forefinger U+1F446	👆 Back Of Hand Pointing Upwards
Lifting the forefinger up as a warning or to emphasize a statement. Can also mean “I've got time“ or “I'm in it“. Wants to draw attention to something. 	U+1F446
👆 Add meaning
Forefinger downwards emoji U+1F447	👇 Back Of Hand Pointing Downwards
Hand with raised forefinger pointing down. You want to draw attention to something: look at the text below! Or you don't feel well, you are feeling down. 	U+1F447
👇 Add meaning
Forefinger emoji Whatsapp U+261D	☝ Up Pointing Index
The raised forefinger stands for a threat: Beware! Could also be a gesture of instruction. Someone has an announcement to make or something important to say. 	U+261D

*/
var emojisweknow = Object.keys(emojiDictionary);
var username = prompt("Give me your name");
var color = "yellow";
//var heading="WELCOME "
var countnew = 0;

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userinput = event.target.value;
    var meaning = emojiDictionary[userinput];
    if (meaning === undefined) {
      meaning = "We dont have this in our database";
    }
    setMeaning(meaning);
  }
  
 var [userinput, setUserInput]=useState("");
  function inputChangeHandler(event){
    console.log(event.target.value);
   setUserInput( event.target.value);
  }

  
  const [count, setLikeCounter] = useState(0);
  function likeClickHandler() {
    countnew = count + 1;
    setLikeCounter(countnew);
    //console.log("Clicked",count);
  }
  
  function emojiClickHandler(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
    
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "lightcoral" }}>
        <u>**Emoji Interpreter**</u>
      </h1>
      <h2 style={{ backgroundColor: color, textAlign: "left" }}>
        Hey {username} !{" "}
      </h2>
      <input  onChange={emojiInputHandler} />
      <div> {meaning}</div>
      <h3 style={{ backgroundColor: "pink" }}> Emojis we have</h3>
      <ul>
        {emojisweknow.map((item) => {
          return (
            <li>
              <span
                onClick={() => emojiClickHandler(item)}
                style={{
                  backgroundColor: "lightyellow",
                  fontSize: "2rem",
                  cursor: "pointer"
                }}
              >
                {item}
              </span>
            </li>
            //onClick={() => emojiClickHandler(item)}
          );
        })}
      </ul>
      <button onClick={likeClickHandler}> ❤ </button> {count}
    </div>
  );
}

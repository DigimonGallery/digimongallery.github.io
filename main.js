var digimonStrings = ["Koromon:in-training:-1,-1,-1,-1,-1,-1:-1,-1,-1,-1,-1,-1,-1,-1,-1,normal, :Agumon,Guilmon,ToyAgumon,Hackmon: ;", "Tsunomon:in-training:-1,-1,-1,-1,-1,-1:-1,-1,-1,-1,-1,-1,-1,-1,-1,normal, :Gabumon,Black Gabumon,Goblimon,Veemon: ;", "Tanemon:in-training:-1,-1,-1,-1,-1,-1:-1,-1,-1,-1,-1,-1,-1,-1,-1,normal, :Palmon,Lalamon,Renamon: ;", "Tsumemon:in-training:-1,-1,-1,-1,-1,-1:-1,-1,-1,-1,-1,-1,-1,-1,-1,normal, :Black Agumon,Keramon,DemiDevimon: ;", "Tokomon:in-training:-1,-1,-1,-1,-1,-1:-1,-1,-1,-1,-1,-1,-1,-1,-1,normal, :Patamon,Falcomon,Hawkmon,Lucemon: ;", "Nyaromon:in-training:-1,-1,-1,-1,-1,-1:-1,-1,-1,-1,-1,-1,-1,-1,-1,normal, :Armadillomon,Terriermon,Salamon: ;", "Pagumon:in-training:-1,-1,-1,-1,-1,-1:-1,-1,-1,-1,-1,-1,-1,-1,-1,normal, :Impmon,Gazimon,Lopmon: ;", "Yokomon:in-training:-1,-1,-1,-1,-1,-1:-1,-1,-1,-1,-1,-1,-1,-1,-1,normal, :Elecmon,Biyomon,Wormmon: ;", "Bukamon:in-training:-1,-1,-1,-1,-1,-1:-1,-1,-1,-1,-1,-1,-1,-1,-1,normal, :Otamamon,Gomamon,Syakomon,Betamon: ;", "Motimon:in-training:-1,-1,-1,-1,-1,-1:-1,-1,-1,-1,-1,-1,-1,-1,-1,normal, :Gotsumon,Tentomon,Hagurumon,Solarmon: ;", "Wanyamon:in-training:-1,-1,-1,-1,-1,-1:-1,-1,-1,-1,-1,-1,-1,-1,-1,normal, :Gaomon,Kudamon,Dorumon: ;", "Agumon:rookie:-1,-1,-1,-1,-1,-1:9,-1,-1,30,-1,-1,-1,-1,10,normal, :Greymon,GeoGreymon,Meramon,Tyrannomon,Sukamon:Koromon;", "Black Agumon:rookie:-1,-1,-1,-1,-1,-1:8,-1,-1,30,-1,-1,-1,-1,-1,normal, :Growlmon,Cyclomon,Tankmon,Tyrannomon,Blue Greymon:Tsumemon;", "Armadillomon:rookie:-1,-1,-1,-1,-1,-1:7,75,-1,-1,20,-1,-1,-1,10,normal, :Ankylomon,Cyclomon,Gold Numemon,Tankmon,Geremon:Nyaromon;", "Impmon:rookie:-1,-1,-1,-1,-1,-1:7,-1,20,-1,-1,30,-1,-1,-1,normal, :Bakemon,Ogremon,Sorcerymon,Black Gatomon,Wizardmon,IceDevimon:Pagumon;", "Elecmon:rookie:-1,-1,-1,-1,-1,-1:7,75,20,-1,-1,-1,20,-1,-1,normal, :Garurumon,Leomon,Nanimon,Sukamon,Black Garurumon,Geremon:Yokomon;", "Otamamon:rookie:-1,-1,-1,-1,-1,-1:7,-1,-1,-1,-1,20,-1,-1,-1,normal, :Gekomon,Numemon,Seadramon,Karatsuki Numemon:Bukamon;", "Gaomon:rookie:-1,-1,-1,-1,-1,-1:9,-1,-1,20,-1,-1,20,-1,10,normal, :Gargomon,Gaogamon,Leomon,Togemon,Ogremon:Wanyamon;", "Gazimon:rookie:-1,-1,-1,-1,-1,-1:9,-1,-1,15,-1,-1,20,-1,-1,normal, :Dorugamon,Gaogamon,Leomon,Chrysalimon,Nanimon,Black Garurumon:Pagumon;", "Gabumon:rookie:-1,-1,-1,-1,-1,-1:7,75,-1,20,-1,-1,20,-1,-1,normal, :Dorugamon,Garurumon,Numemon,Frigimon:Tsunomon;", "Black Gabumon:rookie:-1,-1,-1,-1,-1,-1:6,80,-1,30,-1,-1,-1,-1,-1,normal, :Black Garurumon,Vegimon,Reppamon,Frigimon:Tsunomon;", "Guilmon:rookie:-1,-1,-1,-1,-1,-1:7,-1,-1,30,-1,-1,20,-1,-1,normal, :GeoGreymon,Growlmon,Meramon,Tyrannomon,Blue Greymon:Koromon;", "Kudamon:rookie:-1,-1,-1,-1,-1,-1:8,-1,20,-1,-1,20,-1,-1,-1,normal, :Angemon,Gold Numemon,Peckmon,Reppamon:Wanyamon;", "Keramon:rookie:-1,-1,-1,-1,-1,-1:9,-1,-1,20,-1,-1,20,-1,-1,normal, :Bakemon,Chrysalimon,Platinum Sukamon,Wizardmon:Tsumemon;", "Gotsumon:rookie:-1,-1,-1,-1,-1,-1:8,-1,-1,-1,30,-1,-1,-1,-1,normal, :Ankylomon,Clockmon,Starmon,Tankmon:Motimon;", "Goblimon:rookie:-1,-1,-1,-1,-1,-1:7,-1,-1,40,-1,-1,-1,-1,-1,normal, :Gaogamon,Growlmon,Nanimon,Ogremon,Blue Greymon:Tsunomon;", "Gomamon:rookie:-1,-1,-1,-1,-1,-1:8,100,-1,-1,-1,-1,-1,-1,10,normal, :Ankylomon,Ikkakumon,Sorcerymon,Frigimon:Bukamon;", "Syakomon:rookie:-1,-1,-1,-1,-1,-1:7,-1,-1,-1,15,20,-1,-1,-1,normal, :Ikkakumon,Karatsuki Numemon,Gekomon,Seadramon:Bukamon;", "Solarmon:rookie:-1,-1,-1,-1,-1,-1:6,75,-1,-1,20,-1,-1,-1,-1,normal, :Clockmon,Geremon,Starmon,Meramon:Motimon;", "Terriermon:rookie:-1,-1,-1,-1,-1,-1:8,-1,-1,-1,-1,-1,30,-1,10,normal, :Gargomon,Ikkakumon,Gatomon,Rapidmon Armor:Nyaromon;", "Tentomon:rookie:-1,-1,-1,-1,-1,-1:9,-1,-1,-1,20,-1,-1,-1,10,normal, :Kabuterimon,Waspmon,Kuwagamon,Stingmon,Sunflowmon:Motimon;", "ToyAgumon:rookie:-1,-1,-1,-1,-1,-1:8,75,-1,-1,20,-1,-1,-1,-1,normal, :Clockmon,Greymon,Guardromon,Sukamon,Starmon:Koromon;", "Dorumon:rookie:-1,-1,-1,-1,-1,-1:8,-1,-1,20,-1,-1,30,-1,-1,normal, :Cyclomon,Dorugamon,Guardromon,Waspmon:Wanyamon;", "Hagurumon:rookie:-1,-1,-1,-1,-1,-1:7,75,-1,-1,30,-1,-1,-1,-1,normal, :Clockmon,Gold Numemon,Guardromon,Starmon,Platinum Sukamon:Motimon;", "Patamon:rookie:-1,-1,-1,-1,-1,-1:7,-1,-1,-1,-1,20,20,-1,10,normal, :Angemon,Birdramon,Reppamon,Gatomon,ExVeemon:Tokomon;", "Hackmon:rookie:-1,-1,-1,-1,-1,-1:9,-1,-1,20,-1,-1,-1,20,-1,normal, :Jesmon,Greymon,GeoGreymon,Platinum Sukamon:Koromon;", "Palmon:rookie:-1,-1,-1,-1,-1,-1:8,100,-1,-1,-1,-1,-1,-1,10,normal, :Kuwagamon,Togemon,Vegimon,Sunflowmon,Woodmon:Tanemon;", "DemiDevimon:rookie:-1,-1,-1,-1,-1,-1:8,-1,-1,-1,-1,-1,30,-1,-1,normal, :Bakemon,Devimon,Kyubimon,Chrysalimon,IceDevimon:Tsumemon;", "Biyomon:rookie:-1,-1,-1,-1,-1,-1:8,-1,-1,-1,-1,20,20,-1,10,normal, :Kabuterimon,Aquilamon,Birdramon,Kyubimon:Yokomon;", "Falcomon:rookie:-1,-1,-1,-1,-1,-1:9,-1,-1,-1,-1,-1,30,-1,-1,normal, :Stingmon,ExVeemon,Aquilamon,Peckmon:Tokomon;", "Veemon:rookie:-1,-1,-1,-1,-1,-1:6,-1,-1,20,-1,-1,20,-1,-1,normal, :Flamedramon,Magnamon,ExVeemon:Tsunomon;", "Salamon:rookie:-1,-1,-1,-1,-1,-1:7,-1,20,-1,-1,20,-1,-1,10,normal, :Frigimon,Reppamon,Gatomon,Sorcerymon:Nyaromon;", "Betamon:rookie:-1,-1,-1,-1,-1,-1:8,-1,-1,-1,-1,40,-1,-1,-1,normal, :Gekomon,Numemon,Seadramon,Karatsuki Numemon,Vegimon:Bukamon;", "Hawkmon:rookie:-1,-1,-1,-1,-1,-1:7,-1,-1,-1,-1,-1,30,-1,10,normal, :Meramon,Aquilamon,Birdramon,Peckmon:Tokomon;", "Lalamon:rookie:-1,-1,-1,-1,-1,-1:9,75,-1,-1,-1,-1,30,-1,10,normal, :Sunflowmon,Togemon,Vegimon,Woodmon:Tanemon;", "Lucemon:rookie:-1,-1,-1,-1,-1,-1:30,-1,80,-1,-1,130,-1,80,-1,normal, :Angemon,Devimon,Lucemon FM:Tokomon;", "Renamon:rookie:-1,-1,-1,-1,-1,-1:7,-1,-1,20,-1,20,20,-1,-1,normal, :Black Gatomon,Garurumon,Kyubimon,Woodmon:Tanemon;", "Lopmon:rookie:-1,-1,-1,-1,-1,-1:8,-1,-1,15,-1,20,-1,-1,-1,normal, :Gargomon,Devimon,Black Gatomon,Wizardmon:Pagumon;", "Wormmon:rookie:-1,-1,-1,-1,-1,-1:8,-1,-1,-1,20,-1,-1,-1,10,normal, :Waspmon,Kabuterimon,Kuwagamon,Stingmon,IceDevimon:Yokomon;", "IceDevimon:champion:-1,-1,-1,-1,-1,-1:15,-1,-1,40,-1,40,-1,-1,-1,normal, :Myotismon,Cherrymon,LadyDevimon:Impmon,DemiDevimon,Wormmon;", "Aquilamon:champion:-1,-1,-1,-1,-1,-1:14,-1,-1,-1,-1,-1,55,-1,-1,normal, :AeroVeedramon,Garudamon,Silphymon,Yatagaramon:Biyomon,Falcomon,Hawkmon;", "Ankylomon:champion:-1,-1,-1,-1,-1,-1:15,150,-1,-1,40,-1,-1,-1,-1,normal, :MagnaAngemon,Meteormon,Shakkoumon,SkullGreymon:Armadillomon,Gotsumon,Gomamon;", "Ikkakumon:champion:-1,-1,-1,-1,-1,-1:15,300,-1,-1,-1,-1,-1,-1,25,normal, :MachGaogamon,Whamon,Zudomon:Gomamon,Syakomon,Terriermon;", "Wizardmon:champion:-1,-1,-1,-1,-1,-1:14,-1,35,-1,-1,55,-1,-1,-1,normal, :DeathMeramon,Myotismon,Wisemon:Impmon,Keramon,Lopmon;", "Woodmon:champion:-1,-1,-1,-1,-1,-1:14,500,-1,-1,-1,-1,-1,-1,-1,normal, :Cherrymon,Pumpkinmon,Taomon:Palmon,Lalamon,Renamon;", "ExVeemon:champion:-1,-1,-1,-1,-1,-1:14,-1,-1,40,-1,-1,40,-1,25,normal, :MagnaAngemon,Paildramon,RizeGreymon:Patamon,Falcomon,Veemon;", "Angemon:champion:-1,-1,-1,-1,-1,-1:16,-1,-1,-1,-1,40,-1,-1,-1,normal, :Garudamon,MagnaAngemon,Shakkoumon:Kudamon,Patamon,Lucemon;", "Ogremon:champion:-1,-1,-1,-1,-1,-1:14,-1,-1,55,-1,-1,-1,-1,-1,normal, :DeathMeramon,Digitamamon,WereGarurumon:Impmon,Gaomon,Goblimon;", "Guardromon:champion:-1,-1,-1,-1,-1,-1:14,-1,-1,-1,55,-1,-1,-1,-1,normal, :Andromon,GrappLeomon,Metal Mamemon,Datamon:ToyAgumon,Dorumon,Hagurumon;", "Gaogamon:champion:-1,-1,-1,-1,-1,-1:15,-1,-1,-1,-1,-1,55,-1,-1,normal, :GrappLeomon,MachGaogamon,WereGarurumon:Gaomon,Gazimon,Goblimon;", "Kabuterimon:champion:-1,-1,-1,-1,-1,-1:14,-1,-1,-1,40,40,-1,-1,-1,normal, :MegaKabuterimon,Cherrymon,Lilamon:Tentomon,Biyomon,Wormmon;", "Karatsuki Numemon:champion:-1,-1,-1,-1,-1,-1:14,150,-1,-1,55,-1,-1,-1,-1,normal, :Black KingNumemon,MegaSeadramon,Shogun Gekomon:Otamamon,Syakomon,Betamon;", "Gargomon:champion:-1,-1,-1,-1,-1,-1:15,150,-1,-1,-1,-1,40,-1,-1,normal, :WarGrowlmon,Antylamon,Rapidmon:Gaomon,Terriermon,Lopmon;", "Garurumon:champion:-1,-1,-1,-1,-1,-1:15,-1,-1,-1,-1,-1,50,-1,25,normal, :DoruGreymon,Panjyamon,WereGarurumon,Zudomon:Elecmon,Gabumon,Renamon;", "Black Garurumon:champion:-1,-1,-1,-1,-1,-1:15,-1,-1,35,-1,-1,50,-1,-1,normal, :Black WereGarurumon,BlueMeramon,MachGaogamon: ;", "Kyubimon:champion:-1,-1,-1,-1,-1,-1:14,-1,40,-1,-1,40,40,-1,-1,normal, :LadyDevimon,Monzaemon,Taomon:DemiDevimon,Biyomon,Renamon;", "Growlmon:champion:-1,-1,-1,-1,-1,-1:15,-1,-1,50,-1,-1,20,-1,-1,normal, :Gigadramon,WarGrowlmon,Metal Greymon,Metal Tyrannomon:Black Agumon,Guilmon,Goblimon;", "Chrysalimon:champion:-1,-1,-1,-1,-1,-1:16,150,-1,40,-1,-1,-1,-1,-1,normal, :Cyberdramon,Infermon,Taomon:Gazimon,Keramon,DemiDevimon;", "Greymon:champion:-1,-1,-1,-1,-1,-1:16,-1,-1,55,-1,-1,-1,-1,50,normal, :Metal Greymon,Blue Metal Greymon,Megadramon,SkullGreymon:Agumon,ToyAgumon,Hackmon;", "Blue Greymon:champion:-1,-1,-1,-1,-1,-1:16,150,-1,50,-1,-1,-1,-1,-1,normal, :Blue Metal Greymon,Knightmon,DoruGreymon: ;", "Clockmon:champion:-1,-1,-1,-1,-1,-1:14,-1,-1,-1,-1,35,-1,-1,-1,normal, :Andromon,Knightmon,Datamon,Wisemon:Gotsumon,Solarmon,ToyAgumon,Hagurumon;", "Kuwagamon:champion:-1,-1,-1,-1,-1,-1:14,-1,-1,55,-1,-1,-1,-1,-1,normal, :Cherrymon,Okuwamon,CannonBeemon:Tentomon,Palmon,Wormmon;", "Gekomon:champion:-1,-1,-1,-1,-1,-1:14,-1,40,-1,-1,40,-1,-1,-1,normal, :MegaSeadramon,Shogun Gekomon,Whamon:Otamamon,Syakomon,Betamon;", "Geremon:champion:-1,-1,-1,-1,-1,-1:12,130,25,-1,40,-1,-1,-1,-1,normal, :Etemon,SuperStarmon,Metal Mamemon:Armadillomon,Elecmon,Solarmon;", "Gold Numemon:champion:-1,-1,-1,-1,-1,-1:18,-1,-1,-1,-1,-1,-1,5,-1,normal, :Vademon,Platinum Numemon,Black KingNumemon:Armadillomon,Kudamon,Hagurumon;", "Cyclomon:champion:-1,-1,-1,-1,-1,-1:14,-1,-1,30,30,-1,-1,-1,-1,normal, :Megadramon,DoruGreymon,Datamon:Black Agumon,Armadillomon,Dorumon;", "Sunflowmon:champion:-1,-1,-1,-1,-1,-1:14,150,-1,-1,-1,40,-1,-1,-1,normal, :Angewomon,Lilamon,Lilymon:Tentomon,Palmon,Lalamon;", "Seadramon:champion:-1,-1,-1,-1,-1,-1:14,-1,-1,-1,30,40,-1,-1,-1,normal, :Shogun Gekomon,MegaSeadramon,Whamon:Otamamon,Syakomon,Betamon;", "GeoGreymon:champion:-1,-1,-1,-1,-1,-1:15,150,-1,50,-1,-1,-1,-1,-1,normal, :Gigadramon,RizeGreymon,SkullGreymon:Agumon,Guilmon,Hackmon;", "Sukamon:champion:-1,-1,-1,-1,-1,-1:12,150,-1,-1,40,-1,-1,-1,-1,normal, :SuperStarmon,Etemon,Vademon:Agumon,Elecmon,ToyAgumon;", "Starmon:champion:-1,-1,-1,-1,-1,-1:14,150,-1,-1,35,-1,-1,-1,-1,normal, :Mamemon,Metal Mamemon,SuperStarmon:Gotsumon,Solarmon,ToyAgumon,Hagurumon;", "Stingmon:champion:-1,-1,-1,-1,-1,-1:14,-1,-1,40,-1,-1,55,-1,-1,normal, :Infermon,Paildramon,Okuwamon:Tentomon,Falcomon,Wormmon;", "Sorcerymon:champion:-1,-1,-1,-1,-1,-1:16,-1,40,-1,-1,40,-1,-1,-1,normal, :Antylamon,Piximon,Wisemon:Impmon,Gomamon,Salamon;", "Tankmon:champion:-1,-1,-1,-1,-1,-1:14,-1,-1,-1,55,-1,-1,-1,-1,normal, :Andromon,Gigadramon,CannonBeemon,Knightmon:Black Agumon,Armadillomon,Gotsumon;", "Tyrannomon:champion:-1,-1,-1,-1,-1,-1:14,150,-1,40,-1,-1,-1,-1,-1,normal, :Mamemon,Megadramon,Blue Metal Greymon,Metal Tyrannomon:Agumon,Black Agumon,Guilmon;", "Gatomon:champion:-1,-1,-1,-1,-1,-1:16,-1,-1,-1,-1,40,-1,-1,25,normal, :Angewomon,Lilymon,Silphymon:Terriermon,Patamon,Salamon;", "Devimon:champion:-1,-1,-1,-1,-1,-1:16,-1,-1,40,-1,-1,-1,5,-1,normal, :BlueMeramon,Infermon,Blue Metal Greymon,Myotismon:DemiDevimon,Lucemon,Lopmon;", "Togemon:champion:-1,-1,-1,-1,-1,-1:16,300,-1,-1,30,-1,-1,-1,25,normal, :MachGaogamon,Lilymon,Pumpkinmon:Gaomon,Palmon,Lalamon;", "Dorugamon:champion:-1,-1,-1,-1,-1,-1:14,-1,-1,40,-1,-1,40,-1,-1,normal, :RizeGreymon,DoruGreymon,Chirinmon:Gazimon,Gabumon,Dorumon;", "Nanimon:champion:-1,-1,-1,-1,-1,-1:12,-1,-1,40,40,-1,-1,-1,-1,normal, :Digitamamon,SuperStarmon,Meteormon:Elecmon,Gazimon,Goblimon;", "Numemon:champion:-1,-1,-1,-1,-1,-1:12,150,-1,-1,40,-1,-1,-1,-1,normal, :Black KingNumemon,Etemon,Monzaemon:Otamamon,Gabumon,Betamon;", "Birdramon:champion:-1,-1,-1,-1,-1,-1:14,-1,40,-1,-1,-1,40,-1,-1,normal, :AeroVeedramon,Garudamon,Chirinmon,Yatagaramon:Patamon,Biyomon,Hawkmon;", "Bakemon:champion:-1,-1,-1,-1,-1,-1:13,-1,40,-1,-1,30,-1,-1,-1,normal, :BlueMeramon,Pumpkinmon,Myotismon,LadyDevimon:Impmon,Keramon,DemiDevimon;", "Platinum Sukamon:champion:-1,-1,-1,-1,-1,-1:20,-1,-1,-1,-1,-1,-1,-1,-1,normal, :Etemon,Metal Mamemon,Vademon:Keramon,Hagurumon,Hackmon;", "Black Gatomon:champion:-1,-1,-1,-1,-1,-1:16,-1,-1,-1,-1,40,-1,-1,25,normal, :Cyberdramon,Knightmon,LadyDevimon,Black WereGarurumon:Impmon,Renamon,Lopmon;", "Vegimon:champion:-1,-1,-1,-1,-1,-1:12,300,-1,-1,-1,-1,-1,-1,-1,normal, :Digitamamon,Lilamon,MegaKabuterimon:Black Gabumon,Palmon,Betamon,Lalamon;", "Peckmon:champion:-1,-1,-1,-1,-1,-1:14,-1,-1,-1,-1,-1,50,-1,-1,normal, :Antylamon,Piximon,Yatagaramon:Kudamon,Falcomon,Hawkmon;", "Meramon:champion:-1,-1,-1,-1,-1,-1:14,-1,-1,40,-1,-1,-1,-1,-1,normal, :BlueMeramon,DeathMeramon,Mamemon,Panjyamon:Agumon,Guilmon,Solarmon,Hawkmon;", "Frigimon:champion:-1,-1,-1,-1,-1,-1:11,250,-1,30,-1,-1,-1,-1,-1,normal, :Zudomon,Angewomon,Monzaemon:Gabumon,Black Gabumon,Gomamon,Salamon;", "Leomon:champion:-1,-1,-1,-1,-1,-1:16,-1,-1,55,-1,-1,-1,-1,-1,normal, :GrappLeomon,Metal Greymon,Meteormon,Panjyamon:Elecmon,Gaomon,Gazimon;", "Reppamon:champion:-1,-1,-1,-1,-1,-1:16,-1,-1,-1,-1,-1,40,5,-1,normal, :Rapidmon,Piximon,Chirinmon:Black Gabumon,Kudamon,Patamon,Salamon;", "Waspmon:champion:-1,-1,-1,-1,-1,-1:14,-1,-1,40,-1,-1,40,-1,-1,normal, :CannonBeemon,Rapidmon,MegaKabuterimon,Okuwamon:Tentomon,Dorumon,Wormmon;", "Flamedramon:champion:-1,-1,-1,-1,-1,-1:14,-1,-1,40,-1,-1,40,-1,25,normal,obtain digimental from quest: :Veemon;", "MegaKabuterimon:ultimate:-1,-1,-1,-1,-1,-1:28,400,-1,-1,95,-1,-1,-1,-1,normal, :GranKuwagamon,Magnadramon,Hercules Kabuterimon:Kabuterimon,Vegimon,Waspmon;", "Antylamon:ultimate:-1,-1,-1,-1,-1,-1:28,-1,-1,65,-1,75,85,-1,-1,normal, :Cherubimon Virtue,Diaboromon,Dianamon:Gargomon,Sorcerymon,Peckmon;", "Andromon:ultimate:-1,-1,-1,-1,-1,-1:28,-1,-1,75,75,75,-1,-1,-1,normal, :Craniamon,HiAndromon,TigerVespamon:Guardromon,Clockmon,Tankmon;", "Meteormon:ultimate:-1,-1,-1,-1,-1,-1:26,-1,-1,-1,110,-1,-1,-1,-1,normal, :Ebemon,Metal Etemon,Dianamon:Ankylomon,Nanimon,Leomon;", "Infermon:ultimate:-1,-1,-1,-1,-1,-1:30,-1,-1,95,-1,-1,80,-1,-1,normal, :Beelzemon,Diaboromon,Venom Myotismon:Chrysalimon,Stingmon,Devimon;", "Myotismon:ultimate:-1,-1,-1,-1,-1,-1:30,-1,-1,70,-1,90,-1,10,-1,normal, :Barbamon,Piedmon,Venom Myotismon:IceDevimon,Wizardmon,Devimon,Bakemon;", "AeroVeedramon:ultimate:-1,-1,-1,-1,-1,-1:30,-1,-1,75,-1,-1,95,-1,25,normal, :Ravemon,Dynasmon,UlforceVeedramon:Aquilamon,Birdramon;", "Etemon:ultimate:-1,-1,-1,-1,-1,-1:26,-1,75,-1,75,-1,65,-1,-1,normal, :Metal Etemon,Piedmon,Platinum Numemon:Geremon,Sukamon,Numemon,Platinum Sukamon;", "Angewomon:ultimate:-1,-1,-1,-1,-1,-1:30,-1,75,-1,-1,100,-1,10,-1,normal, :Magnadramon,Ophanimon,Mastemon:Sunflowmon,Gatomon,Frigimon;", "Okuwamon:ultimate:-1,-1,-1,-1,-1,-1:26,-1,-1,95,90,-1,-1,-1,-1,normal, :Diaboromon,GranKuwagamon,Hercules Kabuterimon:Kuwagamon,Stingmon,Waspmon;", "Garudamon:ultimate:-1,-1,-1,-1,-1,-1:30,-1,-1,75,-1,-1,75,-1,-1,normal, :Hououmon,Justimon,Ravemon:Aquilamon,Angemon;", "Gigadramon:ultimate:-1,-1,-1,-1,-1,-1:26,800,-1,75,95,-1,-1,-1,-1,normal, :Metal Seadramon,Machinedramon,GrandLocomon:Growlmon,GeoGreymon,Tankmon;", "CannonBeemon:ultimate:-1,-1,-1,-1,-1,-1:28,-1,-1,-1,75,-1,75,-1,-1,normal, :MegaGargomon,GrandLocomon,TigerVespamon:Kuwagamon,Tankmon,Waspmon;", "GrappLeomon:ultimate:-1,-1,-1,-1,-1,-1:26,400,-1,95,-1,-1,-1,-1,-1,normal, :BanchoLeomon,Duftmon,SaberLeomon:Guardromon,Gaogamon,Leomon;", "Cyberdramon:ultimate:-1,-1,-1,-1,-1,-1:28,40,-1,75,-1,-1,75,-1,-1,normal, :Justimon,Titamon,Alphamon:Chrysalimon,Black Gatomon;", "Shakkoumon:ultimate:-1,-1,-1,-1,-1,-1:30,-1,-1,-1,75,65,-1,-1,100,normal, :Cherubimon Virtue,Vikemon,ChaosGallantmon:Ankylomon,Angemon;", "Cherrymon:ultimate:-1,-1,-1,-1,-1,-1:28,800,-1,-1,70,-1,-1,-1,-1,normal, :GranKuwagamon,Kuzuhamon,Puppetmon:IceDevimon,Woodmon,Kabuterimon,Kuwagamon;", "Silphymon:ultimate:-1,-1,-1,-1,-1,-1:30,-1,-1,60,-1,75,75,-1,100,normal, :Dynasmon,Hououmon,Sakuyamon:Aquilamon,Gatomon;", "SuperStarmon:ultimate:-1,-1,-1,-1,-1,-1:28,-1,70,70,80,-1,-1,-1,-1,normal, :Justimon,Gankuumon,Platinum Numemon:Geremon,Sukamon,Starmon,Nanimon;", "SkullGreymon:ultimate:-1,-1,-1,-1,-1,-1:28,-1,-1,120,85,-1,70,-1,-1,normal, :Daemon,ShineGreymon,Titamon:Ankylomon,Greymon,GeoGreymon;", "Zudomon:ultimate:-1,-1,-1,-1,-1,-1:30,800,-1,75,-1,-1,-1,-1,-1,normal, :Metal Garurumon,Marine Angemon,Vikemon:Ikkakumon,Garurumon,Frigimon;", "Taomon:ultimate:-1,-1,-1,-1,-1,-1:30,-1,60,-1,-1,75,60,-1,-1,normal, :Dianamon,Kuzuhamon,Sakuyamon:Woodmon,Kyubimon,Chrysalimon;", "Chirinmon:ultimate:-1,-1,-1,-1,-1,-1:30,-1,75,-1,-1,-1,100,10,-1,normal, :Metal Garurumon,Seraphimon,Sleipmon:Dorugamon,Birdramon,Reppamon;", "Digitamamon:ultimate:-1,-1,-1,-1,-1,-1:30,700,-1,-1,75,-1,-1,-1,-1,normal, :Minervamon,Belphemon Sleep Mode,Titamon:Ogremon,Nanimon,Vegimon;", "DeathMeramon:ultimate:-1,-1,-1,-1,-1,-1:28,500,-1,95,-1,-1,-1,-1,-1,normal, :Gankuumon,Beelzemon,Boltmon:Wizardmon,Ogremon,Meramon;", "Shogun Gekomon:ultimate:-1,-1,-1,-1,-1,-1:26,900,-1,-1,-1,-1,-1,-1,-1,normal, :Plesiomon,Leviamon,Vikemon:Karatsuki Numemon,Gekomon,Seadramon;", "DoruGreymon:ultimate:-1,-1,-1,-1,-1,-1:39,400,-1,95,75,-1,-1,-1,-1,normal, :Alphamon,Examon,Sleipmon:Garurumon,Blue Greymon,Cyclomon,Dorugamon;", "Knightmon:ultimate:-1,-1,-1,-1,-1,-1:30,-1,-1,75,75,-1,-1,-1,-1,normal, :Craniamon,Duftmon,LordKnightmon:Blue Greymon,Clockmon,Tankmon,Black Gatomon;", "Datamon:ultimate:-1,-1,-1,-1,-1,-1:28,-1,60,-1,-1,85,-1,-1,-1,normal, :Machinedramon,GrandLocomon:Guardromon,Clockmon,Cyclomon;", "Paildramon:ultimate:-1,-1,-1,-1,-1,-1:30,-1,-1,90,60,-1,75,-1,100,normal, :Imperialdramon Dragon Mode:ExVeemon,Stingmon;", "Panjyamon:ultimate:-1,-1,-1,-1,-1,-1:28,350,-1,75,-1,-1,75,-1,-1,normal, :Boltmon,SaberLeomon,MirageGaogamon:Garurumon,Leomon;", "Pumpkinmon:ultimate:-1,-1,-1,-1,-1,-1:26,850,-1,60,-1,60,-1,-1,-1,normal, :Boltmon,Puppetmon,Rosemon:Woodmon,Togemon,Bakemon;", "Piximon:ultimate:-1,-1,-1,-1,-1,-1:26,-1,75,-1,-1,80,80,-1,-1,normal, :Hououmon,Marine Angemon,Ophanimon:Sorcerymon,Peckmon,Reppamon;", "Black KingNumemon:ultimate:-1,-1,-1,-1,-1,-1:32,-1,-1,-1,-1,-1,-1,-1,-1,normal, :Platinum Numemon,Metal Etemon,PrinceMamemon:Karatsuki Numemon,Gold Numemon,Numemon;", "BlueMeramon:ultimate:-1,-1,-1,-1,-1,-1:28,400,-1,80,-1,70,-1,-1,-1,normal, :Barbamon,Boltmon,Daemon:Black Garurumon,Devimon,Bakemon,Meramon;", "Vademon:ultimate:-1,-1,-1,-1,-1,-1:26,-1,85,-1,-1,-1,-1,-1,-1,normal, :Ebemon,Hercules Kabuterimon,HiAndromon:Gold Numemon,Sukamon,Platinum Sukamon;", "Whamon:ultimate:-1,-1,-1,-1,-1,-1:28,850,-1,-1,75,75,-1,-1,-1,normal, :Plesiomon,Marine Angemon,Metal Seadramon:Ikkakumon,Gekomon,Seadramon;", "MagnaAngemon:ultimate:-1,-1,-1,-1,-1,-1:30,-1,80,-1,-1,80,-1,10,-1,normal, :ShineGreymon,LordKnightmon,Seraphimon:Ankylomon,ExVeemon,Angemon;", "MachGaogamon:ultimate:-1,-1,-1,-1,-1,-1:26,-1,-1,75,-1,-1,80,-1,-1,normal, :BanchoLeomon,MirageGaogamon,MegaGargomon:Ikkakumon,Gaogamon,Black Garurumon,Togemon;", "Mamemon:ultimate:-1,-1,-1,-1,-1,-1:26,-1,-1,75,80,-1,-1,-1,-1,normal, :Puppetmon,PrinceMamemon,WarGreymon:Starmon,Tyrannomon,Meramon;", "MegaSeadramon:ultimate:-1,-1,-1,-1,-1,-1:30,400,70,-1,-1,70,-1,-1,-1,normal, :Leviamon,Metal Seadramon,Plesiomon:Karatsuki Numemon,Gekomon,Seadramon;", "Megadramon:ultimate:-1,-1,-1,-1,-1,-1:26,400,-1,95,-1,-1,75,-1,-1,normal, :Machinedramon,UlforceVeedramon:Greymon,Cyclomon,Tyrannomon;", "WarGrowlmon:ultimate:-1,-1,-1,-1,-1,-1:30,-1,-1,105,-1,-1,75,-1,-1,normal, :Gallantmon,ChaosGallantmon,Rust Tyrannomon:Gargomon,Growlmon;", "Metal Greymon:ultimate:-1,-1,-1,-1,-1,-1:30,350,-1,100,-1,-1,-1,-1,50,normal, :Rust Tyrannomon,Gaioumon,WarGreymon:Growlmon,Greymon,Leomon;", "Blue Metal Greymon:ultimate:-1,-1,-1,-1,-1,-1:30,-1,-1,110,-1,-1,-1,-1,-1,normal, :Black WarGreymon,Gaioumon,WarGreymon:Greymon,Blue Greymon,Tyrannomon,Devimon;", "Metal Tyrannomon:ultimate:-1,-1,-1,-1,-1,-1:28,-1,-1,75,95,-1,-1,-1,-1,normal, :Gallantmon,Rust Tyrannomon:Growlmon,Tyrannomon;", "Metal Mamemon:ultimate:-1,-1,-1,-1,-1,-1:26,-1,-1,-1,80,65,-1,-1,-1,normal, :Ebemon,HiAndromon,PrinceMamemon:Guardromon,Geremon,Starmon,Platinum Sukamon;", "Monzaemon:ultimate:-1,-1,-1,-1,-1,-1:26,600,-1,60,-1,-1,-1,-1,-1,normal, :Minervamon,Sakuyamon,SaberLeomon:Kyubimon,Numemon,Frigimon;", "Yatagaramon:ultimate:-1,-1,-1,-1,-1,-1:30,-1,75,-1,-1,-1,90,-1,-1,normal, :Minervamon,Ravemon,Kuzuhamon:Aquilamon,Birdramon;", "RizeGreymon:ultimate:-1,-1,-1,-1,-1,-1:30,350,-1,100,-1,-1,75,-1,50,normal, :Examon,Gaioumon,ShineGreymon:ExVeemon,GeoGreymon,Dorugamon;", "Lilamon:ultimate:-1,-1,-1,-1,-1,-1:30,-1,75,-1,-1,-1,-1,-1,-1,normal, :Lilithmon,Lotusmon,Rosemon:Kabuterimon,Sunflowmon,Vegimon;", "Rapidmon:ultimate:-1,-1,-1,-1,-1,-1:28,-1,-1,75,-1,-1,-1,-1,50,normal, :MegaGargomon,TigerVespamon:Gargomon,Reppamon,Waspmon;", "Lilymon:ultimate:-1,-1,-1,-1,-1,-1:30,-1,-1,-1,-1,75,75,-1,-1,normal,friendshup 50:Magnadramon,Lotusmon,Rosemon:Sunflowmon,Gatomon,Togemon;", "Lucemon FM:ultimate:-1,-1,-1,-1,-1,-1:55,-1,-1,180,-1,240,180,80,-1,normal, :Lucemon SM:Lucemon;", "LadyDevimon:ultimate:-1,-1,-1,-1,-1,-1:30,-1,-1,90,-1,-1,85,-1,50,normal, :Lilithmon,Lotusmon,Mastemon:IceDevimon,Kyubimon,Bakemon,Black Gatomon;", "WereGarurumon:ultimate:-1,-1,-1,-1,-1,-1:28,-1,-1,90,-1,-1,85,-1,50,normal, :Metal Garurumon,MirageGaogamon:Ogremon,Gaogamon,Garurumon;", "Black WereGarurumon:ultimate:-1,-1,-1,-1,-1,-1:28,-1,-1,90,-1,-1,70,-1,-1,normal, :Black Metal Garurumon,Minervamon,BanchoLeomon:Black Garurumon,Black Gatomon;", "Wisemon:ultimate:-1,-1,-1,-1,-1,-1:28,-1,75,-1,-1,100,-1,-1,-1,normal, :Venom Myotismon,Belphemon Sleep Mode,Piedmon:Wizardmon,Clockmon,Sorcerymon;", "Magnamon:ultimate:-1,-1,-1,-1,-1,-1:60,-1,-1,120,145,-1,-1,40,50,normal,obtain digimental from quest: :Veemon;", "Rapidmon Armor:ultimate:-1,-1,-1,-1,-1,-1:50,-1,-1,100,120,120,-1,20,50,normal,obtain digimental from quest: :Terriermon;", "Alphamon:mega:-1,-1,-1,-1,-1,-1:60,-1,-1,150,170,135,-1,40,-1,normal,clear challenge quest: :Cyberdramon,DoruGreymon;", "UlforceVeedramon:mega:-1,-1,-1,-1,-1,-1:60,-1,-1,120,-1,-1,145,40,-1,normal,clear challenge quest: :AeroVeedramon,Megadramon;", "Ebemon:mega:-1,-1,-1,-1,-1,-1:45,-1,120,-1,-1,120,-1,20,-1,normal, : :Meteormon,Vademon,Metal Mamemon;", "Imperialdramon Dragon Mode:mega:-1,-1,-1,-1,-1,-1:55,1600,-1,-1,150,-1,150,20,-1,normal, : :Paildramon;", "Imperialdramon Fighter Mode:mega:-1,-1,-1,-1,-1,-1:-1,-1,-1,-1,-1,-1,-1,-1,-1,normal,??? - he is in the game=but no requirements for him have been listed yet: : ;", "Vikemon:mega:-1,-1,-1,-1,-1,-1:50,1700,-1,130,130,120,-1,20,-1,normal, : :Shakkoumon,Zudomon,Shogun Gekomon;", "Venom Myotismon:mega:-1,-1,-1,-1,-1,-1:55,1200,110,110,-1,110,-1,40,-1,normal, : :Infermon,Myotismon,Wisemon;", "WarGreymon:mega:-1,-1,-1,-1,-1,-1:55,-1,-1,160,130,-1,-1,20,80,normal, :Omnimon:Mamemon,Metal Greymon,Blue Metal Greymon;", "Examon:mega:-1,-1,-1,-1,-1,-1:60,1650,-1,150,-1,-1,150,40,-1,normal, : :DoruGreymon,RizeGreymon;", "Ophanimon:mega:-1,-1,-1,-1,-1,-1:55,-1,120,-1,120,145,-1,40,-1,normal, : :Angewomon,Piximon;", "Gaioumon:mega:-1,-1,-1,-1,-1,-1:50,-1,-1,120,100,-1,100,20,-1,normal, : :Metal Greymon,Blue Metal Greymon,RizeGreymon;", "ChaosGallantmon:mega:-1,-1,-1,-1,-1,-1:60,-1,-1,130,130,130,-1,40,-1,normal, : :Shakkoumon,WarGrowlmon;", "Gankuumon:mega:-1,-1,-1,-1,-1,-1:60,1700,-1,145,120,-1,-1,40,-1,normal, : :SuperStarmon,DeathMeramon;", "Kuzuhamon:mega:-1,-1,-1,-1,-1,-1:55,-1,120,-1,-1,135,120,20,-1,normal, : :Cherrymon,Taomon,Yatagaramon;", "GranKuwagamon:mega:-1,-1,-1,-1,-1,-1:45,1500,-1,120,120,-1,-1,20,-1,normal, : :MegaKabuterimon,Okuwamon,Cherrymon;", "GrandLocomon:mega:-1,-1,-1,-1,-1,-1:50,-1,-1,-1,160,-1,120,20,-1,normal, : :Gigadramon,CannonBeemon,Datamon;", "Craniamon:mega:-1,-1,-1,-1,-1,-1:60,-1,110,-1,180,140,-1,40,-1,normal, : :Andromon,Knightmon;", "Cherubimon Virtue:mega:-1,-1,-1,-1,-1,-1:55,-1,120,-1,-1,145,100,40,-1,normal, : :Antylamon,Shakkoumon;", "SaberLeomon:mega:-1,-1,-1,-1,-1,-1:50,-1,-1,145,-1,-1,120,20,-1,normal, : :GrappLeomon,Panjyamon,Monzaemon;", "Sakuyamon:mega:-1,-1,-1,-1,-1,-1:55,-1,120,-1,-1,120,120,20,-1,normal, : :Silphymon,Taomon,Monzaemon;", "Jesmon:mega:-1,-1,-1,-1,-1,-1:60,-1,-1,130,-1,-1,120,80,80,normal,clear challenge quest: :Hackmon;", "ShineGreymon:mega:-1,-1,-1,-1,-1,-1:55,-1,-1,140,-1,-1,130,20,80,normal, : :SkullGreymon,MagnaAngemon,RizeGreymon;", "Justimon:mega:-1,-1,-1,-1,-1,-1:50,1000,-1,130,110,-1,-1,20,80,normal, : :Garudamon,Cyberdramon,SuperStarmon;", "Sleipmon:mega:-1,-1,-1,-1,-1,-1:60,-1,-1,-1,140,120,150,40,-1,normal, : :Chirinmon,DoruGreymon;", "Seraphimon:mega:-1,-1,-1,-1,-1,-1:55,-1,130,-1,130,150,-1,40,50,normal, : :Chirinmon,MagnaAngemon;", "MegaGargomon:mega:-1,-1,-1,-1,-1,-1:50,-1,-1,-1,130,-1,130,20,-1,normal, : :CannonBeemon,MachGaogamon,Rapidmon;", "TigerVespamon:mega:-1,-1,-1,-1,-1,-1:50,1000,-1,120,-1,-1,130,20,-1,normal, : :Andromon,CannonBeemon,Rapidmon;", "Titamon:mega:-1,-1,-1,-1,-1,-1:55,1400,-1,150,-1,120,-1,20,-1,normal, : :Cyberdramon,SkullGreymon,Digitamamon;", "Dianamon:mega:-1,-1,-1,-1,-1,-1:55,-1,-1,-1,120,130,130,20,-1,normal, : :Antylamon,Meteormon,Taomon;", "Diaboromon:mega:-1,-1,-1,-1,-1,-1:55,1100,-1,180,-1,-1,130,20,-1,normal, : :Antylamon,Infermon,Okuwamon;", "Daemon:mega:-1,-1,-1,-1,-1,-1:60,1600,-1,230,-1,160,-1,80,-1,normal, : :SkullGreymon,BlueMeramon;", "Gallantmon:mega:-1,-1,-1,-1,-1,-1:60,-1,-1,140,140,140,-1,40,50,normal, : :WarGrowlmon,Metal Tyrannomon;", "Dynasmon:mega:-1,-1,-1,-1,-1,-1:60,1200,-1,140,120,-1,130,40,-1,normal,clear challenge quest: :AeroVeedramon,Silphymon;", "Duftmon:mega:-1,-1,-1,-1,-1,-1:60,-1,100,-1,-1,120,104,40,-1,normal, : :GrappLeomon,Knightmon;", "Duftmon Leopard Mode:mega:-1,-1,-1,-1,-1,-1:-1,-1,-1,-1,-1,-1,-1,-1,-1,normal,???: : ;", "HiAndromon:mega:-1,-1,-1,-1,-1,-1:55,-1,-1,100,130,100,-1,20,-1,normal, : :Vademon;", "Barbamon:mega:-1,-1,-1,-1,-1,-1:60,-1,160,-1,120,200,-1,80,-1,normal, : :Myotismon,BlueMeramon;", "BanchoLeomon:mega:-1,-1,-1,-1,-1,-1:55,-1,-1,120,130,-1,-1,20,-1,normal, : :GrappLeomon,MachGaogamon,Black WereGarurumon;", "Piedmon:mega:-1,-1,-1,-1,-1,-1:50,-1,-1,130,-1,160,110,20,-1,normal, : :Myotismon,Etemon,Wisemon;", "Puppetmon:mega:-1,-1,-1,-1,-1,-1:50,-1,-1,130,130,130,-1,20,-1,normal, : :Cherrymon,Pumpkinmon,Mamemon;", "Platinum Numemon:mega:-1,-1,-1,-1,-1,-1:65,-1,-1,-1,-1,-1,-1,10,-1,normal, : :Gold Numemon,Etemon,SuperStarmon,Black KingNumemon;", "Black WarGreymon:mega:-1,-1,-1,-1,-1,-1:55,1800,-1,140,140,-1,-1,20,-1,normal, :Omnimon Zwart:Blue Metal Greymon;", "PrinceMamemon:mega:-1,-1,-1,-1,-1,-1:45,-1,-1,-1,150,-1,-1,20,-1,normal, : :Black KingNumemon,Mamemon,Metal Mamemon;", "Plesiomon:mega:-1,-1,-1,-1,-1,-1:50,-1,100,-1,120,145,-1,20,-1,normal, : :Shogun Gekomon,Whamon,MegaSeadramon;", "Hercules Kabuterimon:mega:-1,-1,-1,-1,-1,-1:50,110,-1,-1,150,120,-1,20,-1,normal, : :MegaKabuterimon,Okuwamon,Vademon;", "Beelzemon:mega:-1,-1,-1,-1,-1,-1:60,2000,-1,250,-1,-1,150,80,-1,normal, : :Infermon,DeathMeramon;", "Belphemon Sleep Mode:mega:-1,-1,-1,-1,-1,-1:60,1700,140,-1,-1,180,-1,80,-1,normal, :Belphemon Rage Mode:Digitamamon,Wisemon;", "Hououmon:mega:-1,-1,-1,-1,-1,-1:50,-1,-1,-1,-1,130,150,20,-1,normal, : : ;", "Magnadramon:mega:-1,-1,-1,-1,-1,-1:55,900,120,-1,-1,145,-1,20,-1,normal, : :MegaKabuterimon,Angewomon,Lilymon;", "Boltmon:mega:-1,-1,-1,-1,-1,-1:50,-1,-1,145,100,-1,-1,20,-1,normal, : :DeathMeramon,Panjyamon,Pumpkinmon,BlueMeramon;", "Mastemon:mega:-1,-1,-1,-1,-1,-1:60,-1,120,120,-1,120,-1,80,100,normal,reach story flag: :Angewomon,LadyDevimon;", "Marine Angemon:mega:-1,-1,-1,-1,-1,-1:50,-1,110,-1,-1,135,-1,20,50,normal, : :Zudomon,Piximon,Whamon;", "Minervamon:mega:-1,-1,-1,-1,-1,-1:55,-1,-1,150,-1,-1,140,20,-1,normal, : :Digitamamon,Monzaemon,Yatagaramon,Black WereGarurumon;", "MirageGaogamon:mega:-1,-1,-1,-1,-1,-1:55,-1,-1,120,-1,-1,130,20,-1,normal, : :Panjyamon,MachGaogamon,WereGarurumon;", "Machinedramon:mega:-1,-1,-1,-1,-1,-1:50,1300,-1,130,130,-1,-1,20,-1,normal, : :Gigadramon,Datamon,Megadramon;", "Metal Etemon:mega:-1,-1,-1,-1,-1,-1:45,-1,100,120,140,-1,-1,20,-1,normal, : :Meteormon,Etemon,Black KingNumemon;", "Metal Garurumon:mega:-1,-1,-1,-1,-1,-1:55,-1,-1,130,120,-1,150,20,80,normal, :Omnimon:Zudomon,Chirinmon,WereGarurumon;", "Black Metal Garurumon:mega:-1,-1,-1,-1,-1,-1:55,-1,-1,-1,135,-1,125,20,-1,normal, :Omnimon Zwart:Black WereGarurumon;", "Metal Seadramon:mega:-1,-1,-1,-1,-1,-1:50,-1,120,-1,120,120,-1,20,-1,normal, : :Gigadramon,Whamon,MegaSeadramon;", "Rust Tyrannomon:mega:-1,-1,-1,-1,-1,-1:55,1300,-1,180,150,-1,-1,20,-1,normal, : :WarGrowlmon,Metal Greymon,Metal Tyrannomon;", "Leviamon:mega:-1,-1,-1,-1,-1,-1:60,2000,140,140,140,140,-1,80,-1,normal, : :Shogun Gekomon,MegaSeadramon;", "Lilithmon:mega:-1,-1,-1,-1,-1,-1:60,-1,200,-1,-1,250,130,80,-1,normal, : :Lilamon,LadyDevimon;", "Ravemon:mega:-1,-1,-1,-1,-1,-1:55,-1,-1,130,-1,-1,160,20,-1,normal, : :AeroVeedramon,Garudamon,Yatagaramon;", "LordKnightmon:mega:-1,-1,-1,-1,-1,-1:60,-1,-1,120,-1,135,150,40,50,normal,clear challenge quest: :Knightmon,MagnaAngemon;", "Rosemon:mega:-1,-1,-1,-1,-1,-1:55,-1,120,-1,-1,120,-1,20,-1,normal, : :Pumpkinmon,Lilamon,Lilymon;", "Lotusmon:mega:-1,-1,-1,-1,-1,-1:55,-1,-1,-1,-1,170,130,20,-1,normal, : :Lilamon,Lilymon,LadyDevimon;", "Imperialdramon Paladin Mode:beyond-mega:-1,-1,-1,-1,-1,-1:70,-1,-1,160,-1,160,160,100,-1,normal,clear challenge quest and get Omega Blade: : ;", "Omnimon:beyond-mega:-1,-1,-1,-1,-1,-1:60,-1,-1,200,-1,150,150,40,100,normal,clear challenge request and get item: :WarGreymon,Metal Garurumon;", "Omnimon Zwart:beyond-mega:-1,-1,-1,-1,-1,-1:60,1500,-1,150,200,-1,-1,40,100,normal,clear challenge quest: :Black WarGreymon,Black Metal Garurumon;", "Belphemon Rage Mode:beyond-mega:-1,-1,-1,-1,-1,-1:-1,-1,-1,-1,-1,-1,-1,-1,-1,normal,??? Requirements unlisted: :Belphemon Sleep Mode;", "Lucemon SM:beyond-mega:-1,-1,-1,-1,-1,-1:70,1400,160,130,-1,250,170,100,-1,normal, : :Lucemon FM;"];

function digimon(name, gen, stats, requirements, digivolesTo, degeneratesTo) {
    this.name = name;
    this.gen = gen;
    this.stats = stats;
    this.requirements = requirements;
    this.digivolvesTo = digivolesTo;
    this.degeneratesTo = degeneratesTo;
}

function digimonStats(hp, sp, atk, def, int, spd) {
    this.hp = hp;
    this.sp = sp;
    this.atk = atk;
    this.def = def;
    this.int = int;
    this.spd = spd;
}

function digimonRequirements(level, hp, sp, atk, def, int, spd, abi, cam, type, notes) {
    this.level = level;
    this.hp = hp;
    this.sp = sp;
    this.atk = atk;
    this.def = def;
    this.int = int;
    this.spd = spd;
    this.abi = abi;
    this.cam = cam;
    this.type = type;
    this.notes = notes;
}

var i = 0;
var digimonList = new Array();

for (i; i < digimonStrings.length; i = i + 1) {
    var unparsedString = digimonStrings[i].split(";")[0];
    unparsedString = unparsedString.split(":");
    var name = unparsedString[0];
    var gen = unparsedString[1].replace("-", " ").toUpperCase();
    var statsUnparsed = unparsedString[2].split(",");
    var stats = new digimonStats(statsUnparsed[0], statsUnparsed[1], statsUnparsed[2], statsUnparsed[3], statsUnparsed[4], statsUnparsed[5]);
    var requirementsUnparsed = unparsedString[3].split(",");
    var requirements = new digimonRequirements(requirementsUnparsed[0], requirementsUnparsed[1], requirementsUnparsed[2], requirementsUnparsed[3], requirementsUnparsed[4], requirementsUnparsed[5], requirementsUnparsed[6], requirementsUnparsed[7], requirementsUnparsed[8], requirementsUnparsed[9], requirementsUnparsed[10].split("="));
    var digivolvesTo = unparsedString[4].split(",");
    var degeneratesTo = unparsedString[5].split(",");
    var d = new digimon(name, gen, stats, requirements, digivolvesTo, degeneratesTo);
    digimonList[name] = d;
}

var infoString = function(d, all){
    var info = "<h6><b>" + d.gen + "</b></h6>";
    if(all){
        info += "<div class=\"divider blue darken-2\"></div>"
        info += "<h6><b>Basic Stats</b></h6>";
        info = statsString(d, info);
    }
    info += "<div class=\"divider blue darken-2\"></div>"
    info += "<h6><b>Digivolve Requirements</b></h6>";
    info = reqsString(d, info);
    info += "<div class=\"divider blue darken-2\"></div>"
    return info;
}

var statsString = function(d, info){
    if(d.stats.hp == "-1"){
        d.stats.hp = "Not available";
    }
    if(d.stats.sp == "-1"){
        d.stats.sp = "Not available";
    }
    if(d.stats.atk == "-1"){
        d.stats.atk = "Not available";
    }
    if(d.stats.def == "-1"){
        d.stats.def = "Not available";
    }
    if(d.stats.int == "-1"){
        d.stats.int = "Not available";
    }
    if(d.stats.spd == "-1"){
        d.stats.spd = "Not available";
    }
    info += "<h6>" + "Max HP: " + d.stats.hp + "</h6>";
    info += "<h6>" + "Max SP: " + d.stats.sp + "</h6>";
    info += "<h6>" + "Attack: " + d.stats.atk + "</h6>";
    info += "<h6>" + "Defense: " + d.stats.def + "</h6>";
    info += "<h6>" + "Intelligence: " + d.stats.int + "</h6>";
    info += "<h6>" + "Speed: " + d.stats.spd + "</h6>";
    return info;
};

var reqsString = function(d, info){
    if(d.requirements.hp != "-1"){
        info += "<h6>" + "Max HP: " + d.requirements.hp + "</h6>";
    }
    if(d.requirements.sp != "-1"){
        info += "<h6>" + "Max SP: " + d.requirements.sp + "</h6>";
    }
    if(d.requirements.atk != "-1"){
        info += "<h6>" + "Attack: " + d.requirements.atk + "</h6>";
    }
    if(d.requirements.def != "-1"){
        info += "<h6>" + "Defense: " + d.requirements.def + "</h6>";
    }
    if(d.requirements.int != "-1"){
        info += "<h6>" + "Intelligence: " + d.requirements.int + "</h6>";
    }
    if(d.requirements.spd != "-1"){
        info += "<h6>" + "Speed: " + d.requirements.spd + "</h6>";
    }
    if(d.requirements.abi != "-1"){
        info += "<h6>" + "Ability: " + d.requirements.abi + "</h6>";
    }
    if(d.requirements.cam != "-1"){
        info += "<h6>" + "Camaraderie: " + d.requirements.cam + "</h6>";
    }
    for(var nIndex in d.requirements.notes){
        var note = d.requirements.notes[nIndex];
        info += "<h6>" + note + "</h6>";
    }
    return info;
};

function blurAll(){
    var tmp = document.createElement("input");
    document.body.appendChild(tmp);
    tmp.focus();
    document.body.removeChild(tmp);
}

function jump(name) {
    window.location = "#" + name;
}

$( document ).ready(function() {
    var callback = function(){
        blurAll();
        window.location = "#" + $("#search").val().toLowerCase();
    }
    for(var name in digimonList) {
        var d = digimonList[name];
        var bigrow = document.createElement("DIV");
        bigrow.id = d.name.toLowerCase().replace(" ", "");
        bigrow.className = "row";
        var tabletop = document.createElement("DIV");
        tabletop.className = "row blue card-panel";
        var table1 = document.createElement("DIV");
        table1.className = "col s4";
        table1.innerHTML = "Degenerations";
        var table2 = document.createElement("DIV");
        table2.className = "col s4";
        table2.innerHTML = "Current Digimon";
        var table3 = document.createElement("DIV");
        table3.className = "col s4";
        table3.innerHTML = "Digivolutions";
        tabletop.appendChild(table1);
        tabletop.appendChild(table2);
        tabletop.appendChild(table3);
        var divider = document.createElement("DIV");
        divider.className = "divider blue darken-2";
        var outerrow = document.createElement("DIV");
        outerrow.className = "row";
        var column1 = document.createElement("DIV");
        column1.className = "col s4";
        var column2 = document.createElement("DIV");
        column2.className = "col s4";
        var column3 = document.createElement("DIV");
        column3.className = "col s4";
        var dname = "";
        for(var dindex = 0; dindex < d.digivolvesTo.length; dindex++){
            dname = d.digivolvesTo[dindex];
            if(dname != "" && dname != " "){
                var row = document.createElement("DIV");
                row.className = "row";
                var info = infoString(digimonList[dname], false);
                row.innerHTML = "<div class='col s12'><div class='card hoverable blue waves-effect waves-light' onclick='jump(\"" + dname.replace(" ", "").toLowerCase() + "\")' style='width:100%'><div class=\"card-content black-text left-align\"><div class='row'><div class='col s9'><span class=\"card-title\"><b>" + dname + "</b></span></div><div class='col s3'><img class='circle responsive-img' src='images/digimon/" + dname + ".png' style='height:100%;width:100%'></div></div><div class=\"divider blue darken-2\"></div>" + info + "</div></div></div>";
                column3.appendChild(row);
            }else{
                var row = document.createElement("DIV");
                row.className = "row";
                row.innerHTML = "<div class='col s12'></div>";
                column3.appendChild(row);
            }
        }
        for(var dindex = 0; dindex < d.degeneratesTo.length; dindex++){
            dname = d.degeneratesTo[dindex];
            if(dname != "" && dname != " "){
                var row = document.createElement("DIV");
                row.className = "row";
                var info = infoString(digimonList[dname], false);
                row.innerHTML = "<div class='col s12'><div class='card hoverable blue waves-effect waves-light' onclick='jump(\"" + dname.replace(" ", "").toLowerCase() + "\")' style='width:100%'><div class=\"card-content black-text left-align\"><div class='row'><div class='col s9'><span class=\"card-title\"><b>" + dname + "</b></span></div><div class='col s3'><img class='circle responsive-img' src='images/digimon/" + dname + ".png' style='height:100%;width:100%'></div></div><div class=\"divider blue darken-2\"></div>" + info + "</div></div></div>";
                column1.appendChild(row);
            }else{
                var row = document.createElement("DIV");
                row.className = "row";
                row.innerHTML = "<div class='col s12'></div>";
                column1.appendChild(row);
            }
        }
        var row = document.createElement("DIV");
        row.className = "row";
        //
        var info = infoString(d, true);
        row.innerHTML = "<div class='col s12'><div class='card hoverable blue waves-effect waves-light' onclick='jump(\"" + d.name.replace(" ", "").toLowerCase() + "\")' style='width:100%'><div class=\"card-content black-text left-align\"><div class='row'><div class='col s9'><span class=\"card-title\"><b>" + d.name + "</b></span></div><div class='col s3'><img class='circle responsive-img' src='images/digimon/" + d.name + ".png' style='height:100%;width:100%'></div></div><div class=\"divider blue darken-2\"></div>" + info + "</div></div></div>";
        column2.appendChild(row);
        outerrow.appendChild(column1);
        outerrow.appendChild(column2);
        outerrow.appendChild(column3);
        bigrow.appendChild(tabletop);
        bigrow.appendChild(divider);
        bigrow.appendChild(outerrow);
        document.getElementById("digimonList").appendChild(bigrow);
    }
    
    var searchbar = document.getElementById("searchbar");
    if(searchbar.addEventListener){
        searchbar.addEventListener("submit", callback, false);  //Modern browsers
    }else if(searchbar.attachEvent){
        searchbar.attachEvent('onsubmit', callback);            //Old IE
    }
    
    $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style work
    });
});
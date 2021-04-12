#! /bin/sh

echo "### deployEnjoySport.sh - `date` - Lancement du déploiement de EnjoySport"

# récupération des sources
echo "### deployEnjoySport.sh - `date` - récupération de sources"
cd /home/ec2-user/enjoySportRepo/
git pull https://github.com/tanguyBayart/enjoySport.git main
echo "### deployEnjoySport.sh - `date` - sources récupérées"

#build
echo "### deployEnjoySport.sh - `date` - Génération du livrable"
ng build
echo "### deployEnjoySport.sh - `date` - Livrable généré"

# nettoyage/déploiement
echo "### deployEnjoySport.sh - `date` - Nettoyage d'Apache"
rm -r /var/www/html/*
echo "### deployEnjoySport.sh - `date` - Apache nettoye"


echo "### deployEnjoySport.sh - `date` - Début du déploiement de $1"
cd dist/
cp -r ./enjoySport/* /var/www/html/
echo "### deployEnjoySport.sh - `date` - Fin du déploiement de $1"


echo "### deployEnjoySport.sh - `date` - Redemarrage d'Apache"
sudo service httpd stop > /dev/null 2>&1
sudo service httpd start > /dev/null 2>&1


# Adresse IP à remplacer (cf. console Amazon)
echo "### deployEnjoySport.sh - `date` - Application disponible! @ http://15.237.75.240/"

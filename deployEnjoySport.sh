#! /bin/sh
TZ='Europe/Paris';
echo "### deployEnjoySport.sh - `date` - Lancement du déploiement de EnjoySport"

# récupération des sources
echo "### deployEnjoySport.sh - `date` - récupération de sources"
cd /home/ec2-user/enjoySportRepo/
git reset --hard
git pull https://github.com/tanguyBayart/enjoySport.git main
echo "### deployEnjoySport.sh - `date` - sources récupérées"

# modification de welcome-view.component.html
dateD=`date +"%Y-%m-%d à %H:%M"`
VERSION=`grep version package.json  | cut -d "\"" -f4`

echo "### deployEnjoySport.sh - `date` - date de déploiement : " $dateD
echo "### deployEnjoySport.sh - `date` - date de déploiement : version =" $VERSION

sed "s/==dateyyyymmddHHmmss==/${dateD}/g" /home/ec2-user/enjoySportRepo/src/app/welcome-view/welcome-view.component.html >| /home/ec2-user/enjoySportRepo/src/app/welcome-view/welcome-view.component.html.tmp1
sed "s/==versionDev==/$VERSION/g" /home/ec2-user/enjoySportRepo/src/app/welcome-view/welcome-view.component.html.tmp1 >| /home/ec2-user/enjoySportRepo/src/app/welcome-view/welcome-view.component.html.tmp2
mv /home/ec2-user/enjoySportRepo/src/app/welcome-view/welcome-view.component.html.tmp2 /home/ec2-user/enjoySportRepo/src/app/welcome-view/welcome-view.component.html

#node = "/home/ec2-user/.nvm/versions/node/v15.14.0/bin/node"
# build
echo "### deployEnjoySport.sh - `date` - Génération du livrable"
/home/ec2-user/.nvm/versions/node/v15.14.0/bin/ng build

if [[ $? -ne 0 ]]
then
        echo "### deployEnjoySport.sh - `date` - ng duild failed !!"
        exit -1;
fi

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

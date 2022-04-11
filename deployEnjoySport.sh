#! /bin/sh
TZ='Europe/Paris';
echo "### deployEnjoySport.sh - `date` - Lancement du déploiement de EnjoySport"

# récupération des sources
echo "### deployEnjoySport.sh - `date` - récupération de sources"
cd /home/iaam4644/EJ2repo/enjoySport
git reset --hard
git pull https://github.com/tanguyBayart/enjoySport.git main
echo "### deployEnjoySport.sh - `date` - récupération de sourceses"

# modification de welcome-view.component.html
dateD=`date +"%Y-%m-%d à %H:%M"`
VERSION=`grep version package.json  | cut -d "\"" -f4`

echo "### deployEnjoySport.sh - `date` - date de déploiement : " $dateD
echo "### deployEnjoySport.sh - `date` - date de déploiement : version =" $VERSION

# deploiment date and version
echo  "### deployEnjoySport.sh - `date` - date and version : " $dateD " - " $VERSION
sed "s/==dateyyyymmddHHmmss==/${dateD}/g" /home/iaam4644/EJ2repo/enjoySport/src/app/welcome-view/welcome-view.component.html >| /home/iaam4644/EJ2repo/enjoySport/src/app/welcome-view/welcome-view.component.html.tmp1
sed "s/==versionDev==/$VERSION/g" /home/iaam4644/EJ2repo/enjoySport/src/app/welcome-view/welcome-view.component.html.tmp1 >| /home/iaam4644/EJ2repo/enjoySport/src/app/welcome-view/welcome-view.component.html.tmp2
cp /home/iaam4644/EJ2repo/enjoySport/src/app/welcome-view/welcome-view.component.html.tmp2 /home/iaam4644/EJ2repo/enjoySport/src/app/welcome-view/welcome-view.component.html

ls -l /home/iaam4644/EJ2repo/enjoySport/src/app/welcome-view/welcome-view.component.html
ls -l /home/iaam4644/EJ2repo/enjoySport/src/app/welcome-view/welcome-view.component.html.tmp1
ls -l /home/iaam4644/EJ2repo/enjoySport/src/app/welcome-view/welcome-view.component.html.tmp1
ls -l /home/iaam4644/EJ2repo/enjoySport/src/app/welcome-view/welcome-view.component.html.tmp2
ls -l /home/iaam4644/EJ2repo/enjoySport/src/app/welcome-view/welcome-view.component.html


# build
echo "### deployEnjoySport.sh - `date` - Génération du livrable"
./node_modules/.bin/ng build

if [[ $? -ne 0 ]]
then
        echo "### deployEnjoySport.sh - `date` - ng build failed !!"
        exit -1;
fi

echo "### deployEnjoySport.sh - `date` - Livrable généré"

# nettoyage/déploiement
echo "### deployEnjoySport.sh - `date` - Nettoyage d'Apache"
rm -r ../../public_html/*
echo "### deployEnjoySport.sh - `date` - Apache nettoye"


echo "### deployEnjoySport.sh - `date` - Début du déploiete"
cd dist/
cp -r ./enjoySport/* ../../../public_html/

echo "### deployEnjoySport.sh - `date` - Fin du déploiemnt"


echo "### deployEnjoySport.sh - `date` - Redemarrage d'Apache"
sudo service httpd stop > /dev/null 2>&1
sudo service httpd start > /dev/null 2>&1


echo "### deployEnjoySport.sh - `date` - Application disponible! @ http://http://enjoysport.org/"

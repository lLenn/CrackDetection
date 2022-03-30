apt-get install python3-pip < <( echo Y )
apt-get install python3-venv < <( echo Y )

python3 -m venv env

source env/bin/activate

pip install -r requirements.txt

deactivate
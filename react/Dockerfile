# ===============================
# ✅ React + Vite (Node 22 + Yarn 4)
# ===============================
FROM node:22-bookworm

# Mises à jour de sécurité
RUN apt-get update && apt-get -y upgrade

# Dossier de travail
WORKDIR /home

# Active Corepack (permet d’utiliser Yarn 4 proprement)
RUN corepack enable && corepack prepare yarn@4.3.1 --activate

# Crée le projet (React + Vite)
RUN yarn dlx create-vite@latest frontend --template react

# Entre dans le dossier du projet
WORKDIR /home/frontend

# Installe Vite + plugin React (pour s’assurer que vite existe bien)
RUN npm install -D vite @vitejs/plugin-react

# Installe toutes les dépendances app
RUN yarn add axios react-router-dom jwt-decode @react-google-maps/api emailjs-com @emailjs/browser react-scroll

# Installation finale (pour installer aussi devDependencies)
RUN yarn install

# Expose le port du serveur de dev
EXPOSE 5173

# Commande de lancement
CMD ["yarn", "dev", "--host", "0.0.0.0", "--port", "5173"]

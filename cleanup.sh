function startCleanup() {
    find . -name $1 -type d -prune -exec rm -rf '{}' +
}
function startCleanupFilesWithExtensions() {
    find . -name \*.$1 -type f -delete
}

startCleanupFilesWithExtensions "lock"
startCleanup "node_modules"
startCleanup "DerivedData"
startCleanup "Pods"
startCleanup ".cxx"
startCleanup "tmp"

npm cache clean --force
npm i

cd ios
pod install
cd ..

cd android
./gradlew clean
cd ..

npx react-native run-android
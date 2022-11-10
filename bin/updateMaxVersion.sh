hugoversion=$1

git checkout -b hugo-v$hugoversion

ts-node ./bin/updateMaxVersion.ts $hugoversion

git add -p

git commit -m "⬆️ Upgrade Hugo: v$hugoversion"

git push --set-upstream origin hugo-$verhugoversionsion

gh pr create -d --title "⬆️ Upgrade Hugo: v$hugoversion" --body "Upgrades the max compatible version of Hugo to [v$hugoversion](https://github.com/gohugoio/hugo/releases/tag/v$hugoversion)"
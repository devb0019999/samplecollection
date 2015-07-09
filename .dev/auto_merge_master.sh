#!/bin/sh

#gitコマンドが使用できるパス（≒ワークスペース）
#git_work_home=/cygdrive/c/WORK/01.dev/workspace/002/samplecollection
git_work_home=/home/sysusr1/dev2/samplecollection

echo "### 引数チェック ###"
if [ -z "$1" ];
then
echo "--- mergeするbranch名を引数1に指定すること! ---"
exit 1
fi

cd ${git_work_home}
pwd

#echo "### masterブランチへマージします。よろしいですか？ y/n ###"
#read answer

#case $answer in 
#	y)
#	
#		echo "-- masterブランチへのマージ開始！ --"
#		;;
#	n)
#		echo "-- マージ作業中断 --"
#		exit 1
#		;;
#	*)
#		echo "-- マージ作業中断 yかnを入力してください --"
#		exit 1
#		;;
#esac

echo "### masterへ移動 ###"
git checkout master

echo "### masterを更新 ###"
git pull

echo "### masterへmerge ###"
echo "--- merge するブランチ$1 ---"
git merge --no-ff $1

echo "### masterをpush ###"
git push origin master

echo "### branchを元にもどす ###"
git checkout $1


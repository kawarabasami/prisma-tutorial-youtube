# Postgres起動方法

## 事前準備

1. wslにdockerをインストールしておく

## 起動方法

1. wslで本ディレクトリに移動し、下記コマンドを押下
   ```
   docker compose up -d
   ```

## 起動確認
```
docker ps -l
```

## 停止方法
```
docker compose down 
```
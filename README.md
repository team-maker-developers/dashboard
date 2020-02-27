# team-maker-admin
- team-maker for admins

## mock 
### status
- [![Netlify Status](https://api.netlify.com/api/v1/badges/4abb0641-6c64-4a32-b5e8-03d761a7fcff/deploy-status)](https://app.netlify.com/sites/tender-poitras-265ea2/deploys)

### url
- https://tender-poitras-265ea2.netlify.com/

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# serve with mock
$ yarn mock
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## login設定
- backendの環境構築を完了させる
    - `php artisan migrate:fresh --seed` を実行
    - `oauth_clinets` にデータができていることを確認する
- adminのenvを設定する
    - `oauth_clinets`.`password_client`がtrueのレコードの値を入力する
        - API_CLIENT_ID = `oauth_clinets`.`id`
        - API_CLIENT_SECRET = `oauth_clinets`.`secret`
- 会社番号は以下を入力する
    - backendで作成したcompanyのunique_idを入力する
    - getパラメータにunique_idをセットすることで、入力を省略することも可能
# Very short description of the project

This project shows a simple dashboard I have created with laravel, inertia, vue Js.
The dashboard act as a boilerplate with predefined users, roles, settings and other features.
I have created this project using of metronic 7 dashboard HTML theme and then I have converted it into vue components.

## Installation

-   You will need an apache and sql server running, you can use XAMPP.

1. First install composer dependencies.

```bash
composer install
```

2. Install packages

```bash
npm install

```

3. Copy .env.example into .env file.

```bash
cp .env.example .env
```

4. Generate application keys.

```bash
php artisan key:generate
```

5. Create a database for the app matches the database in your .env file.

6. Migrate and seed the data.

```bash
php artisan migrate:fresh --seed
```

7. Build the app.

```bash
npm run build
```

8. open your xampp connections (Apache,Sql).

9. Serve the app on localhost.

```bash
php artisan serve
```

## Usage

-   First you need to login to the app using credintials in the **UserSeeder** File or use this email and password (**Email** : admin@ex.com, **password**: password).
-   You will be directed into the Dashboard directly with the charts and data shown.
-   You can browse the rest of the app if you are interested.
-   **Note** Some Features are incompleted.

## Credits

-   [Mostafa Essam](https://github.com/mostafa)

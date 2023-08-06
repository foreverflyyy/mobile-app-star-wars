# Тестовое задание Android/iOS разработчика
# Описание
В этом задании мы хотим, чтобы вы реализовали простое мобильное приложение, 
которое позволяет пользователям искать ресурсы «Звездных войн» (персонажей и 
звездолетов) и сохранять их в избранном. Для получения данных используйте 
https://swapi.dev/.

Приложение должно иметь как минимум 2 страницы/просмотра:
- Домашняя страница: пользователи могут искать персонажей и звездолеты и отмечать их как избранные.
- Страница избранного: отображаются персонажи и звездолеты, отмеченные как избранные.
- БОНУС: на странице избранного отобразите фильмы, в которых появляются любимые персонажи и звездолеты.

# Условия
Создайте мобильное приложение для iOS или Android.
Допускается использование мультиплатформенных сред разработки (Flutter, React-Native, Xamarin и других)
Приложение должно собираться и запускаться на последней версии Android или iOS

# Содержимое приложения:
- На главной странице отобразите элемент ввода, который позволяет пользователю 
искать персонажей, звездолеты и планеты по «имени», и вызов API должен 
инициироваться только после того, как пользователь введет не менее 2 символов.
- На странице поиска и в избранном нужно отображать «имя, пол и количество 
звездолетов, которые пилотировал этот человек» для персонажей «Звездных войн», 
«имя, модель, производитель, пассажиры» для звездолетов.
- БОНУС: К персонажам и звездолётам добавить третий тип объектов - планеты. Для планет показывать в списке название, диаметр, кол-во населения.
- БОНУС: На странице избранного нужно отображать «название, режиссер и продюсер» для фильмов.

<h5>Вам решать, где хранить избранное, но оно должно быть постоянным 
(храниться между запусками приложения).</h5>

<h3>Дополнительные пожелания:</h3>
- Поддерживайте чистоту кода с помощью объектно-ориентированной структуры, легко читаемой и тестируемой, а также 
разработанной так, как если бы она была частью более крупного проекта.
- Вы можете использовать любые сторонние библиотеки, но должны быть в состоянии объяснить, почему вы решили их использовать.
- Не забывайте о unit тестах.
- Должна быть возможность сборки и запуска приложения на любом компьютере разработчика.
- Бонусные баллы за хороший README.md (описание вашего приложения, процесса сборки и пр.)
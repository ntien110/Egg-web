# Cách cài đặt và chạy server
## Cách cài đặt
- cài đặt `node` và `yarn` (nếu trên ubuntu thì cài thông qua `nvm` là nhanh nhất)
**Chú ý:** Có thể dùng `npm` thay vì `yarn`, nhưng yarn nhanh hơn nên mình recomment `yarn` hơn
## Cách chạy project
- Vào bên trong thư mục của project
- Mở terminal/cmd
- Chạy lệnh `yarn install` nếu dùng yarn, `npm install` nếu dùng npm
- Chạy lệnh `node index`, nếu thấy dòng "server started." tức là server đã chạy và có thể nhận dữ liệu.
- Server sẽ nhận dữ liệu qua đường dẫn `http://localhost:3000/register` với phương thức POST.
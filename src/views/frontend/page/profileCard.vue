<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12 col-md-6 d-flex justify-content-center" style="background-color: #a3f0b7;">
                <img src="https://api.soyyo.digital/media/background/image_background.png"
                    style="max-width: 100%; width: 40%;" />
            </div>
            <!-- Perfil del Usuario (Avatar) -->
            <div class="col-lg-12 col-md-6 d-flex justify-content-center">
                <img src="https://placekitten.com/150/150" class="img-thumbnail rounded-circle" alt="User Avatar"
                    style="width: 20vh; height: 20vh; z-index: 1;margin-top: -5rem;">
                <!-- Puedes agregar un ícono de cámara o editar aquí si lo deseas -->
            </div>
            <div class="col-lg-12 col-md-6 d-flex justify-content-center">
                <div class="text-center ">
                    <h3 class="my-2">Fernandin Mi gatita</h3>
                    <h4 class="my-2">Inge Gatita</h4>
                    <button class="btn btn-secondary my-3">Guardar Contacto</button>
                </div>
            </div>
            <div class="col-lg-12 col-md-6 d-flex justify-content-center">
                <div class="card border-primary">
                    <div class="card-body">
                        <h6 class="card-title">Redes Sociales</h6>
                        <!-- Lista de Redes Sociales -->
                        <ul class="row">
                            <li class="col-md-6 d-flex flex-row justify-content-center align-items-center">
                                <img src="https://api.soyyo.digital/media/base_social_media/icon_facebook.png" class="mr-3"
                                    alt="Facebook Icon" style="width: 50px; height: 50px;">
                                <div class="media-body">
                                    <h5 class="mt-0">Facebook</h5>
                                    <!-- Puedes agregar más detalles sobre la cuenta de Facebook si lo deseas -->
                                </div>
                            </li>
                            <li class="col-md-6 d-flex flex-row justify-content-center align-items-center">
                                <img src="https://api.soyyo.digital/media/base_social_media/icon_facebook.png" class="mr-3"
                                    alt="Facebook Icon" style="width: 50px; height: 50px;">
                                <div class="media-body">
                                    <h5 class="mt-0">Instagram</h5>
                                    <!-- Puedes agregar más detalles sobre la cuenta de Facebook si lo deseas -->
                                </div>
                            </li>
                            <li class="col-md-6 d-flex flex-row justify-content-center align-items-center">
                                <img src="https://api.soyyo.digital/media/base_social_media/icon_facebook.png" class="mr-3"
                                    alt="Facebook Icon" style="width: 50px; height: 50px;">
                                <div class="media-body">
                                    <h5 class="mt-0">Gmail</h5>
                                    <!-- Puedes agregar más detalles sobre la cuenta de Facebook si lo deseas -->
                                </div>
                            </li>
                            <li class="col-md-6 d-flex flex-row justify-content-center align-items-center">
                                <img src="https://api.soyyo.digital/media/base_social_media/icon_facebook.png" class="mr-3"
                                    alt="Facebook Icon" style="width: 50px; height: 50px;">
                                <div class="media-body">
                                    <h5 class="mt-0">Whatsap</h5>
                                    <!-- Puedes agregar más detalles sobre la cuenta de Facebook si lo deseas -->
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: "Tu nombre",
            email: "tu@correo.com",
            birthdate: "1980-01-01",
            interests: ["Viajar", "Leer", "Programar"],
        };
    },
}
</script>
<style scoped></style>
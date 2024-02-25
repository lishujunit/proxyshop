<template>
    <section class="wrapper bg-light">
        <div class="container">
            <div class="row mb-10">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">API key</h5>

                        <div class="form-floating mb-4">
                            <input id="name" type="text" class="form-control" readonly=""
                                value="70a7a792-b35a-454e-9fbd-e1aebd482bde">
                            <label for="name">API key</label>
                        </div>

                        <p>
                            The API key is needed for all endpoints below. If this key has become known to anyone except yourself, you should regenerate this key immediately using the button below. This will immediately invalidate access using the current key.
                        </p>

                        <p>
                            <a href="?action=regenerate"
                                onclick="return confirm('Are you sure? This cannot be undone and will invalidate your existing key immediately');"
                                class="btn btn-danger">Regenerate API token</a>
                        </p>
                        <p>
                            For information on how to use our API please see our <router-link to="/web/documentation">documentation</router-link>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
</section></template>
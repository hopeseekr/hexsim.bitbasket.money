<template>
    <section id="dashboard" class="subpage col-sm-12">
        <h3>Your Simulated Portfolio</h3>
        <div class="container">
            <div class="row form-group">
                <div class="col-sm-3">
                    <label for="ethereum">Ethereum Price:</label>
                </div>
                <div class="col-sm-9">
                    <input type="number" class="form-control" id="ethereum" placeholder="000.00" />
                </div>
            </div>
            <div class="row form-group">
                <label class="control-label col-sm-3" for="hexcoin">Hex Price:</label>
                <div class="col-sm-9">
                    <input type="number" class="form-control" id="hexcoin" placeholder="0.00" name="pwd">
                </div>
            </div>
            <div class="row form-group">
                <label class="control-label col-sm-5" for="ethSlider">Future ETH Price:</label>
                <div class="col-sm-5">
                    <input id="ethSlider" data-slider-id='ethSlider' type="number" data-slider-min="0" data-slider-max="2000" data-slider-step="1" data-slider-value="740" />
                </div>
                <div class="col-sm-2">
                    <span id="simEthPrice">$ 740</span>
                </div>
            </div>
            <div class="row form-group">
                <label class="control-label col-sm-5" for="hexSlider">Future HEX Price:</label>
                <div class="col-sm-5">
                    <input id="hexSlider" data-slider-id='hexSlider' type="number" data-slider-min="0" data-slider-max="200" data-slider-step="1" data-slider-value="20" />
                </div>
                <div class="col-sm-2">
                    <span id="simHexPrice">$ 0.20</span>
                </div>
            </div>
            <div class="row form-group">
                <label class="control-label col-sm-5" for="daysStakedSlider">Days Staked:</label>
                <div class="col-sm-5">
                    <input id="daysStakedSlider" data-slider-id='daysStakedSlider' type="number" data-slider-min="0" data-slider-max="5555" data-slider-step="1" data-slider-value="365" />
                </div>
                <div class="col-sm-2">
                    <span id="daysStaked">365 days</span>
                </div>
            </div>
            <div class="row form-group">
                <div class="col-sm-12" style="text-align: center">
                    <button type="submit" class="btn btn-lg btn-primary">Simulate</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Dashboard',
        props: {
            user: Object
        },
        created: function () {
            $(document).ready(() => {
                const $ethSlider = $('#ethSlider');
                const $hexSlider = $('#hexSlider');
                const $daysSlider = $('#daysStakedSlider');

                $ethSlider.slider({
                    formatter: function(value) {
                        return 'Current value: $ ' + value;
                    }
                });
                $hexSlider.slider({
                    formatter: function(value) {
                        return 'Current value: $ ' + (value / 100);
                    }
                });
                $daysSlider.slider({
                    formatter: function(value) {
                        const day = value === 1 ? 'day' : 'days';
                        return value + ' ' + day;
                    }
                });

                $ethSlider.change((event) => {
                    $('span#simEthPrice').text('$ ' + event.value.newValue);
                })
                $hexSlider.change((event) => {
                    $('span#simHexPrice').text('$ ' + (event.value.newValue / 100));
                })
                $daysSlider.change((event) => {
                    const day = event.value.newValue === 1 ? 'day' : 'days';
                    $('span#daysStaked').text(event.value.newValue + " " + day)
                });
            })
        }
    }
</script>

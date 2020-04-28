import { Component, h, Prop, Host, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'c-progress-bar'
})
export class ProgressBar implements ComponentInterface {
    @Prop() type: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link' = 'primary';
    @Prop() value: number = 0;
    @Prop() size: string = 'md';
    @Prop() description: string = 'Loading...';
    @Prop() hideDescription: boolean;
    @Prop() progressLabel: string = 'Progress';
    @Prop() hideProgressLabel: boolean;

    validateValue() {
        return isNaN(this.value)
            ? 0
            : this.value < 0
                ? 0
                : this.value > 100
                    ? 100
                    : this.value;
    }


    render() {
        this.value = this.validateValue();

        return (
            <Host class="progress">
                <div class="labels">
                    {!this.hideDescription && <span class="description">{this.description}</span>}
                    <span class={{
                        'progress-label': true,
                        'sr-only': this.hideProgressLabel
                    }}>{this.progressLabel}: {this.value}%</span>
                </div>
                <span class={`progress-bar ${this.size}`} aria-valuemin="0" aria-valuemax="100" aria-valuenow={this.value.toString()} role="progressbar">
                    <span class={`value ${this.type}`} style={{ width: `${this.value}%` }}></span>
                </span>
            </Host>
        );
    }
}
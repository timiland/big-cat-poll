export default interface IAsset {
  readonly alt: string;
  readonly copyright: string;
  readonly fieldtype: string;
  readonly filename: string;
  readonly focus: string;
  readonly id: number;
  readonly is_external_url: boolean;
  readonly name?: string;
  readonly title: string;
}

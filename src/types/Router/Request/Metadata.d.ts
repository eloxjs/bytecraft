declare interface PageData<BodyType = any> {
    ok: boolean;
    status: HTTP_STATUS_CODE;
    statusText: HttpStatusCodes[HTTP_STATUS_CONSTANT][text];
    body: BodyType;
    url: string;
    redirect: null|string;
} 